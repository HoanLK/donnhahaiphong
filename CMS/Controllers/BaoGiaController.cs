using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CMS.Controllers
{
    [RoutePrefix("bao-gia")]
    public class BaoGiaController : Controller
    {
        // GET: BaoGia
        [Route]
        public ActionResult Index()
        {
            return View();
        }
    }
}