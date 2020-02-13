using System;
using System.Collections.Generic;
using Earbud.Data;
using Earbud.Models;
using Microsoft.AspNetCore.Mvc;

namespace Earbud.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        [HttpGet]
        public List<Song> Get()
        {
            List<Song> songs = (new ITunesAccess()).getBowieRecordings();
            songs.Sort();
            return songs;
        }
    }
}