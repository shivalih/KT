using KT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KT.Controllers
{
    public class KTLoginController : Controller
    {
        public ActionResult KTLogin()
        {
            var model = new KTLoginModel();
            model.Email = "Enter your email id here";
            model.Password = "Enter Password";

            return View(model);
        }
    }
}