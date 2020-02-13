using Newtonsoft.Json;
using System;

namespace Earbud.Models
{
    public class Song : IComparable<Song>
    {
        [JsonProperty("trackId")]
        public long ID { get; set; }

        [JsonProperty("trackName")]
        public string Title { get; set; }

        [JsonProperty("collectionName")]
        public string Album { get; set; }

        [JsonProperty("trackTimeMillis")]
        public int Length { get; set; }

        [JsonProperty("artworkUrl100")]
        public string Image { get; set; }

        public int CompareTo(Song other)
        {
            string thisTitle = Title.Trim().Replace("\"", "");
            string otherTitle = other.Title.Trim().Replace("\"", "");
            return thisTitle.CompareTo(otherTitle);
        }
    }
}
