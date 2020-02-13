using Earbud.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace Earbud.Data
{
    public class ITunesAccess
    {
        public List<Song> getBowieRecordings()
        {
            List<Song> songs = new List<Song>();

            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create("https://itunes.apple.com/lookup?id=551695&entity=song&country=us&limit=125");
            httpWebRequest.Method = WebRequestMethods.Http.Get;
            httpWebRequest.Accept = "application/json";

            HttpWebResponse response = (HttpWebResponse)(httpWebRequest.GetResponse());

            if (response.StatusCode != HttpStatusCode.OK)
            {
                return songs;
            }

            using (StreamReader responseStream = new StreamReader(response.GetResponseStream()))
            {
                string responseText = responseStream.ReadToEnd();

                if (responseText != null && responseText.Length > 0)
                {
                    JObject root = JObject.Parse(responseText);

                    JArray recordings = JArray.Parse(root["results"].ToString());

                    foreach(JObject obj in recordings.Children<JObject>())
                    {
                        if (!obj.SelectToken("wrapperType").ToString().Equals("track"))
                        {
                            continue;
                        }
                        Song song = JsonConvert.DeserializeObject<Song>(obj.ToString());
                        songs.Add(song);
                    }
                }
            }

            return songs;
        }
    }
}
