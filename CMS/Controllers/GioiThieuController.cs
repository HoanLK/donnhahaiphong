using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CMS.Controllers
{
    [RoutePrefix("gioi-thieu")]
    public class GioiThieuController : Controller
    {
        // GET: GioiThieu
        [Route]
        public ActionResult Index()
        {
            return View();
        }
    }
}