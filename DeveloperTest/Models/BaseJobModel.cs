using DeveloperTest.Database.Models;
using System;
using System.Collections;

namespace DeveloperTest.Models
{
    public class BaseJobModel
    {
        public string Engineer { get; set; }

        public DateTime When { get; set; }
        public int CustomerId { get; set; }
    }
}
