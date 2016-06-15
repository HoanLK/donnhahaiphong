using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CMS.Models;

namespace CMS.Controllers
{


    [RoutePrefix("dich-vu")]
    public class DichVuController : Controller
    {
        private FullHouseEntities db = new FullHouseEntities();


        // GET: DichVu
        [Route]
        public ActionResult Index()
        {
            return View();
        }

        //Dọn nhà theo tiếng
        [Route("don-nha-theo-tieng")]
        public ActionResult DonNhaTheoTieng()
        {
            ViewBag.Title = "Dọn nhà theo tiếng";

            var model = db.Post.Where(p => p.idPost == 1).FirstOrDefault();

            return View("~/Views/BaiViet/Index.cshtml", model);
        }

        //Vệ sinh văn phòng
        [Route("ve-sinh-van-phong")]
        public ActionResult VeSinhVanPhong()
        {
            ViewBag.Title = "Vệ sinh văn phòng";

            var model = db.Post.Where(p => p.idPost == 2).FirstOrDefault();

            return View("~/Views/BaiViet/Index.cshtml", model);
        }

        //Vệ sinh công nghiệp
        [Route("ve-sinh-cong-nghiep")]
        public ActionResult VeSinhCongNghiep()
        {
            ViewBag.Title = "Vệ sinh công nghiệp";

            var model = db.Post.Where(p => p.idPost == 3).FirstOrDefault();

            return View("~/Views/BaiViet/Index.cshtml", model);
        }
    }
}