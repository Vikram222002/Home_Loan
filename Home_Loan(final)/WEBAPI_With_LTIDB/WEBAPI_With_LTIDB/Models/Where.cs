using System.ComponentModel.DataAnnotations;

namespace WEBAPI_With_LTIDB.Models
{
  public class Where
  {
    [Key]
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public decimal Price { get; set; }
    public string CatName { get; set; }
  }
}
