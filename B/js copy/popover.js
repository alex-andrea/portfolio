$('#contact').click(function (){
  $("#contact").popover({
    content: `
      <a class="contact" href="mailto:alandrea@uw.edu">alandrea@uw.edu</a>`,
    html: true,
    placement: "bottom",
    trigger: "manual"
  }).popover("toggle");

  });
