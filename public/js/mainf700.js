
function general_faq() {
  jQuery(".tatva-faq-section .faq-listing .faq-inner .faq-title")
    .unbind("click")
    .on("click", function () {
      jQuery(this).parent(".faq-inner").hasClass("active")
        ? (jQuery(this).parent(".faq-inner").removeClass("active"),
          jQuery(this)
            .parent(".faq-inner")
            .children(".faq-detail")
            .slideUp(400))
        : (jQuery(".tatva-faq-section .faq-listing .faq-inner").removeClass(
            "active"
          ),
          jQuery(this).parent(".faq-inner").addClass("active"),
          jQuery(".faq-detail").slideUp(400),
          jQuery(this)
            .parent(".faq-inner")
            .children(".faq-detail")
            .stop(!0, !0)
            .slideDown(400));
    });
}
general_faq()
