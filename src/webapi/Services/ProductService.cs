using WebApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System;

namespace WebApi.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(INettbutikkDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.ProductsCollectionName);
        }

        public List<Product> Get() =>
            _products.Find(Product => true).ToList();


        public Product Get(int productid) =>
            
            _products.Find<Product>(product => product.Productid == productid).FirstOrDefault();

        public Product Create(Product product)
        {
            _products.InsertOne(product);
            return product;
        }

        public void Update(int productid, Product productIn) =>
            _products.ReplaceOne(product => product.Productid == productid, productIn);

        public void Remove(Product productIn) =>
            _products.DeleteOne(product => product.Productid == productIn.Productid);

        public void Remove(int productid) => 
            _products.DeleteOne(product => product.Productid == productid);
    }
}