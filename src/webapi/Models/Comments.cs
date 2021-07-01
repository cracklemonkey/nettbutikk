using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{      
    [BsonIgnoreExtraElements]
    public class Comment{

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        

        [BsonElement("commentid")]     
        public int Commentid {get; set;}
       
        [BsonElement("body")]
        public string Body {get; set;}
        

    }
}