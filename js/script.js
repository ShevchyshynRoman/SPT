const massange = [
  {
    m: "Здравствуйте, меня зовут Ольга Викторовна. Я врач высшей категории и кандидат медицинских наук, специализируюсь на кардиологии. Я провожу ЭКГ и занимаюсь лечением ишемической болезни сердца, постинфарктных состояний, артериальной гипертензии, нарушений сердечного ритма и сердечной недостаточности. Добро пожаловать на мой официальный сайт.",
  },
  {
    m: "Здесь я провожу бесплатную онлайн-диагностику и даю личные рекомендации, которые помогли избавиться от гипертонии сотням женщин и мужчин. Ведь гипертония коварна тем, что человек долгое время остается в неведении относительно своего состояния, не зная ее симптомы.",
  },
  {
    m: "Чтобы провести диагностику и получить мои рекомендации по восстановлению артериального давления и нормализации работы сердца, ответьте на несколько вопросов.",
  },
  {
    m: "Вы мужчина или женщина? ",
  },
  {
    m: "Когда Вы родились? ",
  },
  {
    m: "У Вас есть аллергия на продукты питания, лекарства, пыльцу растений, яд насекомых?/",
  },
  {
    m: "Есть ли в списке один или несколько симптомов, наблюдающихся у Вас? ",
  },
];

var mass_id = 0;
var length_mass = 0;
var lengt_num_mas = 0;
var text = "";
var process = true;
const set = setTimeout(() => {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p id="mass' +
    mass_id +
    '"></p></div></div></div>';
  $(".chat-content-list").append(body_mas);
  const mas_inf = setInterval(function () {
    if (process == true) {
      if (lengt_num_mas != massange.length) {
        text += massange[lengt_num_mas].m[length_mass];
        length_mass++;
        scrollDown();
        $("#mass" + lengt_num_mas + "").html(text);
        if (
          lengt_num_mas === 3 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          appGender();
          process = false;
          genderNext();
          scrollDown();
        }
        if (
          lengt_num_mas === 4 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          appAge();
          process = false;
          genderNext();
          scrollDown();
        }
        if (
          lengt_num_mas === 5 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          process = false;
          YsNo();
          scrollDown();
        }
        if (
          lengt_num_mas === 6 &&
          length_mass === massange[lengt_num_mas].m.length - 1
        ) {
          process = false;
          Photofoot();
          setTimeout(() => {
            let sc_top = $("#foot1");
            $("#page_chat").animate(
              {
                scrollTop: sc_top[0].offsetTop,
              },
              500
            );
            scrollDown();
          }, 1000);
        }

        if (length_mass == massange[lengt_num_mas].m.length) {
          scrollDown();
          lengt_num_mas++;
          mass_id++;
          length_mass = 0;
          text = "";
          app();
          let proc_scroling = lengt_num_mas - 1;
          let nev_div = $("#mass" + proc_scroling + "")[0].offsetParent
            .offsetTop;
          scriplongBody(nev_div);
        }
      } else if (
        lengt_num_mas === 21
      ) {
        scrollDown();
        clearInterval(mas_inf);
        $('#mass' + lengt_num_mas + '').parent().parent().css('display', 'none');
        $('.iframe-form').css('display', 'block');
        scrollDown();
        clearInterval(set);
        showForm();
      }
    }
  }, 1);
}, 1000);

function app() {
  const body_mas =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p id="mass' +
    mass_id +
    '"></p></div></div></div>';
  $(".chat-content-list").append(body_mas);
  scrollDown();
}


function myMassange(userGend) {
  let mass =
    '<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p>' +
    userGend +
    "</p></div></div></div>";
  $(".chat-content-list").append(mass);
  scrollDown();
}


function appGender() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM">Мужчина</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW">Женщина</span></div></div>'
  );
}

function genderNext() {
  $(".chooseGenderM").click(() => {
    document.querySelector(".chat-content-buttons-gender").style.display =
      "none";
    myMassange("Мужчина");

    setTimeout(() => {
      process = true;
    }, 500);
    scrollDown();
  });
  $(".chooseGenderW").click(() => {
    document.querySelector(".chat-content-buttons-gender").style.display =
      "none";
    myMassange("Женщина");

    setTimeout(() => {
      process = true;
    }, 500);
    scrollDown();
  });
}


function appAge() {
  scrollDown();
  $(".chat-content-list").append(
    '<form name="questionForm" class="form" id="form_opr"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day empty_field"><option value="" selected="selected">День</option>undefined<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month empty_field"><option value="" selected="selected">Месяц</option>undefined<option value="1">январь</option><option value="2">февраль</option><option value="3">март</option><option value="4">апрель</option><option value="5">май</option><option value="6">июнь</option><option value="7">июль</option><option value="8">август</option><option value="9">сентябрь</option><option value="10">октябрь</option><option value="11">ноябрь</option><option value="12">декабрь</option></select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year empty_field"><option value="" selected="selected">Год</option>undefined<option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option></select></div></div></form>'
  );

  let data = setInterval(() => {
    let empty_field = $(".select-day").val();
    let full_month = $(".select-month").val();
    let year = $(".select-year").val();
    if (empty_field !== "" && full_month !== "" && year !== "") {
      let selectS = "" + empty_field + "." + full_month + "." + year + "";

      myMassange(selectS);
      $(this).css("display", "none");
      process = true;
      clearInterval(data);
    }
  }, 500);
}


function YsNo() {
  scrollDown();
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGenderM" id="yeas">ДА</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGenderW" id="no">Нет</span></div></div>'
  );
  $("#yeas").click(() => {
    $(".chat-content-buttons-gender").css("display", "none");
    myMassange("Да");
    process = true;
    scrollDown();
  });
  $("#no").click(() => {
    $(".chat-content-buttons-gender").css("display", "none");
    myMassange("Нет");
    process = true;
    scrollDown();
  });
}


function Photofoot() {
  $(".chat-content-list").append(
    '<div class="chat-content-desc-item manager"><img class="symptomsImg" style="max-width: 625px;" src="images/symptomsFull.png" id="foot1"><img class="symptoms-mobile" src="images/symptoms.png"></div>'
  );
  setTimeout(() => {
    addArray();
    process = true;
  }, 8500);
}


function addArray() {
  end_massange1 = {
    m: 'У большинства людей с гипертонией не проявляется никаких симптомов, поэтому ее называют "молчаливым убийцей" А если у Вас уже наблюдаться выше перечисленные симптомы это сигнализирует о больших проблемах с сердцем.',
  };
  end_massange2 = {
    m: "Повышенное кровяное давление очень опасно. Чем выше кровяное давление, тем выше риск повреждения сердца или кровеносных сосудов в основных органах, таких как мозг или почки. Неконтролируемая гипертония может привести к инфаркту, увеличению сердца и, в конечном итоге, к сердечной недостаточности. В кровеносных сосудах могут развиваться расширения (аневризмы) и появляться уязвимые места, в которых сосуды с большей вероятностью могут закупориваться и разрываться. Давление в кровеносных сосудах может привести к кровоизлиянию в мозг и развитию инсульта. Гипертония может также приводить к почечной недостаточности, слепоте и когнитивным нарушениям.",
  };
  end_massange3 = {
    m: "Первая рекомендация - вести здоровый образ жизни и уделять особое внимание надлежащему питанию. Также следует уменьшать потребление соли до менее 5 г в день (чуть менее одной чайной ложки).",
  };
  end_massange4 = {
    m: "Вторая рекомендация - управлять стрессом такими здоровыми способами, как медитация, надлежащие физические упражнения и позитивные социальные контакты.",
  };
  end_massange5 = {
    m: "В Вашем случае обязательно нужно чистить сосуды и организм в целом. Для этого вам помогут вытяжки из плодов боярышника, цветков календулы, цветков липы, листьев мать-и-мачехи, травы мелиссы, травы пустырника, травы зверобоя, травы тысячелистника, плодов софоры, плодов шиповника, комплекс из 12-ти витаминов. Это самые необходимые средства, которые помогут Вам избавиться от гипертонии.",
  };
  end_massange6 = {
    m: "Для избавления от головной боли и восстановления давления достаточно принимать капсулы «GiperoPlus» 2 раза в день по 1 штуке, независимо от приема пищи, главное запивать большим количеством воды.",
  };
  end_massange7 = {
    m: "Абсолютно каждый компонент из состава «GiperoPlus» оказывает комплексное положительное воздействие на работу всех внутренних органов и систем. Также он снимает негативное влияние стрессов и переживаний, делает организм более выносливым и активным. Огромный перечень натуральных компонентов способствует быстрому и бережному восстановлению сердечно-сосудистой системы.",
  };
  end_massange8 = {
    m: "Вот так он выглядит: ",
  };
  end_massange9 = {
    m: '<img src="images/offer.png">',
  };
  end_massange10 = {
    m: "Оптимальная продолжительность курса, которая учитывает Ваш возраст, образ жизни и текущее состояние здоровья, составляет от 30 дней.",
  };
  end_massange11 = {
    m: "Доказано, что даже продолжительное использование показывает значительные результаты. Лекарство оказывает следующее действие:",
  };
  end_massange12 = {
    m: "- улучшает химический состав крови; </br> - приводит уровень артериального давления в норму; </br> - избавляет от застойных явлений; </br> - очищает от шлаков и токсинов; </br> - избавляет от атеросклеротических бляшек; </br> - улучшает мозговое кровообращение; </br> - повышает выносливость и активность; </br> - препятствует возникновению осложнений; </br> - способствует оздоровлению поврежденных тканей.",
  };
  end_massange13 = {
    m: "А ещё у меня для Вас отличные новости. Вы прошли онлайн-диагностику и тем самым стали участником розыгрыша этого препарата, который является нашим спонсором. Только сегодня, у Вас есть возможность получить «GiperoPlus» -  <span style='color: red;'>бесплатно</span>.",
  };
  end_massange14 = {
    m: "Чтобы получить «GiperoPlus», впишите своё имя и номер телефона в форму заказа ниже. Ваши данные отправляются напрямую производителю, больше никто не имеет к ним доступа. Вам перезвонит специалист и после уточнения всех необходимых деталей, в тот же день Вам будет отправлена посылка с курсом «GiperoPlus».",
  };
  massange.push(
    end_massange1,
    end_massange2,
    end_massange3,
    end_massange4,
    end_massange5,
    end_massange6,
    end_massange7,
    end_massange8,
    end_massange9,
    end_massange10,
    end_massange11,
    end_massange12,
    end_massange13,
    end_massange14
  );
}


let top_scroling = 0;

function scriplongBody(x) {
  let ekac_x = x + 70;
  top_scroling += ekac_x;
  var set = setTimeout(() => {
    $("#page_chat").animate(
      {
        scrollTop: top_scroling,
      },
      1000
    );
  }, 300);
}

function showForm() {
  $(".iframe-form").addClass("show"),
    $(".btn-top").addClass("show"),
    $(".reviews").removeClass("hide");
}

function scrollDown() {
  var wrap = $(".content"),
    wrapHeight = wrap.height(),
    currentHeight = wrap.scrollTop(),
    wrapScrollHeight = wrap.prop("scrollHeight"),
    desiredHeight = wrapScrollHeight - wrapHeight;
  if (currentHeight < desiredHeight) {
    wrap.scrollTop(desiredHeight);
  }
}


//

var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight,
  mousePos = {
    x: 400,
    y: 300
  },
  canvas = document.createElement('canvas'),
  context = canvas.getContext('2d'),
  particles = [],
  rockets = [],
  MAX_PARTICLES = 400,
  colorCode = 0;
jQuery(document).ready(function () {
  jQuery(".trigger_fworks").click(function () {
    jQuery(".fireworks").toggle();
    jQuery(".fireworks").append(canvas);
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    setInterval(launch, 800);
    setInterval(loop, 1000 / 50);
  });
});
jQuery(document).mousemove(function (e) {
  e.preventDefault();
  mousePos = {
    x: e.clientX,
    y: e.clientY
  };
});
jQuery(document).mousedown(function (e) {
  for (var i = 0; i < 5; i++) {
    launchFrom(Math.random() * SCREEN_WIDTH * 2 / 3 + SCREEN_WIDTH / 6);
  }
});

function launch() {
  launchFrom(mousePos.x);
}

function launchFrom(x) {
  if (rockets.length < 10) {
    var rocket = new Rocket(x);
    rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
    rocket.vel.y = Math.random() * -3 - 4;
    rocket.vel.x = Math.random() * 6 - 3;
    rocket.size = 8;
    rocket.shrink = 0.999;
    rocket.gravity = 0.01;
    rockets.push(rocket);
  }
}

function loop() {
  if (SCREEN_WIDTH != window.innerWidth) {
    canvas.width = SCREEN_WIDTH = window.innerWidth;
  }
  if (SCREEN_HEIGHT != window.innerHeight) {
    canvas.height = SCREEN_HEIGHT = window.innerHeight;
  }
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  var existingRockets = [];
  for (var i = 0; i < rockets.length; i++) {
    rockets[i].update();
    rockets[i].render(context);
    var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));
    var randomChance = rockets[i].pos.y < (SCREEN_HEIGHT * 2 / 3) ? (Math.random() * 100 <= 1) : false;
    if (rockets[i].pos.y < SCREEN_HEIGHT / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
      rockets[i].explode();
    } else {
      existingRockets.push(rockets[i]);
    }
  }
  rockets = existingRockets;
  var existingParticles = [];
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    if (particles[i].exists()) {
      particles[i].render(context);
      existingParticles.push(particles[i]);
    }
  }
  particles = existingParticles;
  while (particles.length > MAX_PARTICLES) {
    particles.shift();
  }
}

function Particle(pos) {
  this.pos = {
    x: pos ? pos.x : 0,
    y: pos ? pos.y : 0
  };
  this.vel = {
    x: 0,
    y: 0
  };
  this.shrink = .97;
  this.size = 2;
  this.resistance = 1;
  this.gravity = 0;
  this.flick = false;
  this.alpha = 1;
  this.fade = 0;
  this.color = 0;
}
Particle.prototype.update = function () {
  this.vel.x *= this.resistance;
  this.vel.y *= this.resistance;
  this.vel.y += this.gravity;
  this.pos.x += this.vel.x;
  this.pos.y += this.vel.y;
  this.size *= this.shrink;
  this.alpha -= this.fade;
};
Particle.prototype.render = function (c) {
  if (!this.exists()) {
    return;
  }
  c.save();
  c.globalCompositeOperation = 'lighter';
  var x = this.pos.x,
    y = this.pos.y,
    r = this.size / 2;
  var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
  gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
  gradient.addColorStop(0.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")");
  gradient.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)");
  c.fillStyle = gradient;
  c.beginPath();
  c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
  c.closePath();
  c.fill();
  c.restore();
};
Particle.prototype.exists = function () {
  return this.alpha >= 0.1 && this.size >= 1;
};

function Rocket(x) {
  Particle.apply(this, [{
    x: x,
    y: SCREEN_HEIGHT
  }]);
  this.explosionColor = 0;
}
Rocket.prototype = new Particle();
Rocket.prototype.constructor = Rocket;
Rocket.prototype.explode = function () {
  var count = Math.random() * 10 + 80;
  for (var i = 0; i < count; i++) {
    var particle = new Particle(this.pos);
    var angle = Math.random() * Math.PI * 2;
    var speed = Math.cos(Math.random() * Math.PI / 2) * 15;
    particle.vel.x = Math.cos(angle) * speed;
    particle.vel.y = Math.sin(angle) * speed;
    particle.size = 10;
    particle.gravity = 0.2;
    particle.resistance = 0.92;
    particle.shrink = Math.random() * 0.05 + 0.93;
    particle.flick = true;
    particle.color = this.explosionColor;
    particles.push(particle);
  }
};
Rocket.prototype.render = function (c) {
  if (!this.exists()) {
    return;
  }
  c.save();
  c.globalCompositeOperation = 'lighter';
  var x = this.pos.x,
    y = this.pos.y,
    r = this.size / 2;
  var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
  gradient.addColorStop(0.1, "rgba(255, 255, 255 ," + this.alpha + ")");
  gradient.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")");
  c.fillStyle = gradient;
  c.beginPath();
  c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
  c.closePath();
  c.fill();
  c.restore();
};

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = "block";
      jQuery(".fireworks").toggle();
      jQuery(".fireworks").append(canvas);
      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
      setInterval(launch, 400);
      setInterval(loop, 500 / 50);
    }, 8000);
    setTimeout(function () {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  $(".wrapper_2").css({
    'display': 'flex'
  })
});
$(".pop-up-button, .spin-result-wrapper, .close-popup").click(function () {
  $(".fireworks, .wrapper_F").hide();
  $(".wrapper_2").slideDown(0, function () {
    $('html, body').animate({
      scrollTop: $("#wrp2").offset().top,
    }, 0);
  });
});
var time = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $("#min").html("0" + mins);
  $("#sec").html(secs);
}
//$('.slider').addClass('owl-carousel'); $('.slider').owlCarousel({items:1, loop:true, margin:0, });
var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = "block";
      jQuery(".fireworks").toggle();
      jQuery(".fireworks").append(canvas);
      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
      setInterval(launch, 400);
      setInterval(loop, 500 / 50);
    }, 8000);
    setTimeout(function () {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  $(".wrapper_2").css({
    'display': 'flex'
  })
});
$(".pop-up-button, .spin-result-wrapper, .close-popup").click(function () {
  $(".fireworks, .wrapper_F").hide();
  $(".wrapper_2").slideDown(0, function () {
    $('html, body').animate({
      scrollTop: $("#wrp2").offset().top,
    }, 0);
  });
});
var time = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $("#min").html("0" + mins);
  $("#sec").html(secs);
}


$(document).ready(function() {
  $('#order-form').submit(function(e) {
    e.preventDefault();
    var tel = $('#phone').val();

    $(".error-phone").remove();

    if (tel.length !== 13) {
      $('#phone').after('<span class="error-phone">Номер должен начинаться +38 и длина номера 13</span>');
    } else if (tel.startsWith('+38')) {
      
      alert('Submited')
    }
  });
});
