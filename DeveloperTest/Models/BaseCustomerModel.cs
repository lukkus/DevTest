using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DeveloperTest.Models
{
    public class BaseCustomerModel
    {
        [Required]
        [StringLength(32, MinimumLength = 5, ErrorMessage = "Name must have at least 5 characters")]
        public string Name { get; set; }

        [Required]
        public string Type { get; set; }
    }
}
