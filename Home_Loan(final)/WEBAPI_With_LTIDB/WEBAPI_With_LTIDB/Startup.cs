using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WEBAPI_With_LTIDB.Models;

namespace WEBAPI_With_LTIDB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(item => item.UseSqlServer(Configuration.GetConnectionString("MyConStr")));

      ///cors=>cross origin Resource sharing cros  is security policy is be configured as follows

      services.AddCors(setup =>
      {
        setup.AddPolicy("default", options =>
        {
          options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
          // httpverbs: httpMethods  => HttpGet,HttpPost,HttpPut,HttpDelete
        });



      });
      services.AddControllers();
           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
      app.UseCors("default");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
