using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace CMS.Controllers
{
    public class SendEmailController : Controller
    {
        // GET: SendEmail
        //public ActionResult Index()
        //{
        //    return View();
        //}

        public ActionResult Index(CMS.Models.MailModel _objModelMail)
        {
            if (ModelState.IsValid)
            {
                MailMessage mail = new MailMessage();
                mail.To.Add("donnhahaiphong86@gmail.com");
                mail.From = new MailAddress("hoanlk93@gmail.com");
                mail.Subject = "Thông tin khách hàng đăng ký";
                string Body = "<b>Họ tên khách hàng:</b> " + _objModelMail.HoTen + "<br>" 
                                + "<b>Số điện thoại:</b> " + _objModelMail.SDT + "<br>"
                                + "<b>Email:</b> " + _objModelMail.Email;
                mail.Body = Body;
                mail.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new System.Net.NetworkCredential
                ("donnhahaiphong86@gmail.com", "nguyenminhngoc");// Enter seders User name and password
                smtp.EnableSsl = true;
                smtp.Send(mail);
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
    }
}