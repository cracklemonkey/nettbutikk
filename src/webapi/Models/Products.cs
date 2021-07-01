using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{       [BsonIgnoreExtraElements]
    public class Product{
        [BsonElement("productid")]     
       public int Productid {get; set;}
        [BsonElement("title")]
        public string Title {get; set;}
        [BsonElement("body")]
        public string Body {get; set;}
        [BsonElement("price")]
        public int Price {get; set;}

    }
}