namespace WebApi.Models{

    public class NettbutikkDatabaseSettings : INettbutikkDatabaseSettings
    {
        public string CommentsCollectionName { get; set; }
        public string ProductsCollectionName { get; set; }
        public string ConnectionString { get; set; }
       
        public string DatabaseName { get; set; }
    }

    public interface INettbutikkDatabaseSettings
    {   string CommentsCollectionName { get; set; }
        string ProductsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}