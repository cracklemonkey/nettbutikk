using WebApi.Models;
using WebApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public ActionResult<List<Product>> Get() =>
            _productService.Get();

        [HttpGet("{productid}", Name = "GetProduct")]
        public ActionResult<Product> Get(int productid)
        {   Console.WriteLine(productid);
            var product = _productService.Get(productid);

            if (product == null)
            {
                
                return NotFound();
            }

            return product;
        }

        [HttpPost ("{productid}")]
        public ActionResult<Product> Create(Product product)
        {
            _productService.Create(product);

            return CreatedAtRoute("GetProduct", new { product.Productid }, product);
        }
         [HttpPut("{productid}")]
        public IActionResult Update(int productid, Product productIn)
        {
            var product = _productService.Get(productid);

            if (product == null)
            {
                return NotFound();
            }

            _productService.Update(productid, productIn);

            return NoContent();
        }

        
        [HttpDelete("{productid}")]
        public IActionResult Delete(int productid)
        {
            var product = _productService.Get(productid);

            if (product == null)
            {
                return NotFound();
            }

            _productService.Remove(product.Productid);

            return NoContent();
        }
    }
}