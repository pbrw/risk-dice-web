using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Supermarket.API.Controllers
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class ProductsQuery
    {
        public int id { get; set; }
    }

    public class ProductsController : ControllerBase
    {
        public ProductsController()
        {
        }

        /// <summary>
        /// Lists all existing products.
        /// </summary>
        /// <returns>List of products.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(Product), 200)]
        public async Task<Product> GetProduct([FromQuery] ProductsQuery query)
        {
            var res = new Product();
            res.Id = query.id;
            res.Name = "Produkcik";
            // Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            // Response.Headers.Add("Access-Control-Allow-Credentials", "true");
            return res;
        }

        /// <summary>
        /// Lists all existing products.
        /// </summary>
        /// <returns>List of products.</returns>
        [HttpOptions]
        [ProducesResponseType(typeof(Product), 200)]
        public async Task<Product> OptionsProduct([FromQuery] ProductsQuery query)
        {
            var res = new Product();
            res.Id = query.id;
            res.Name = "Produkcik";
            // Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            // Response.Headers.Add("Access-Control-Allow-Credentials", "true");
            return res;
        }
    }
}