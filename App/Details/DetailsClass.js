// Home Carousel
var homeCarousel = new Slider({
    data: { route: "Home", act: "readVips", vip: 1 },
    area: "#homeCarousel",
    type: "carousel",
    scrollHide: false,
    class: ["home-carousel"],
    buttons: {
      left: true,
      right: true,
    },
    scrollHide: true,
    template: "<img src='Assets/Media/{dir}'>",
    cell: {
      class: ["slider-cell"],
      attributes: [
        "cell-id",
        "dir",
        "title",
        "description",
        "bedrooms",
        "rooms",
        "price",
        "space",
        "floor",
      ],
      gap: 0,
      width: "100%",
    },
  });

  // Currency Toggle Button
$('.toggle-btn-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.toggle-btn-value').is(':checked')) {
      $(mainParent).addClass('active');
    } else {
      $(mainParent).removeClass('active');
    }
  
  })
// Super Vip Statemens Slider
  var SuperVipHomeStatementSlider = new Slider({
    data: { route: "Home", act: "readVips", vip: 1 },
    area: "#SuperVipHomeStatementSlider",
    type: "slider",
    scrollHide: false,
    class: ["home-carousel"],
    buttons: {
      left: true,
      right: true,
    },
    scrollHide: true,
    template: `<div class="statement-card">
      <div class="statement-image">
        <img src="http://localhost/RealEstateProject/Assets/Media/slideshowpic1.jpg" alt="#" />
        <div class="statement-status s-vip">
            <p>S-VIP</p>
          </div>
          <div class="favorite">
            <i class="icon-favorite statement-favorite"></i>
          </div>
      </div>
      <div class="statement-description" style="display:none">
        <h1>Apartment for Sale</h1>
        <div class="price-area">
          <div class="price">
            <p>15000</p>
            <div class="statement-currency"><span>$</span></div>
          </div>
          <div class="area">
            <i class="icon-area"></i>
            <p>250 m²</p>
          </div>
        </div>
        <div class="statement-properties">
          <span><i class="icon-door"></i> Rooms 5</span>
          <span><i class="icon-bed"></i> Bedrooms 5</span>
          <span><i class="icon-floor"></i> Floor 5</span>
        </div>
        <p class="statement-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
    </div>`,
    cell: {
      class: ["slider-cell"],
      attributes: [
        "cell-id",
        "dir",
        "title",
        "description",
        "bedrooms",
        "rooms",
        "price",
        "space",
        "floor",
      ],
      gap: "5vw",
      width: "20%",
    },
  });
  