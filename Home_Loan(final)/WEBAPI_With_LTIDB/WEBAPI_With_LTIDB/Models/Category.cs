using System.ComponentModel.DataAnnotations;

namespace WEBAPI_With_LTIDB.Models
{
    public class Category
    {
        [Key]
        public int CatId { get; set; }
        public string CatName { get; set; }
    }
}
