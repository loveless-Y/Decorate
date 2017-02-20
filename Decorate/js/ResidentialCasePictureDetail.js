(function ($, window) {
    var Index = 1,
    NowIndex = 1,
    LastIndex = 1;
    IndexMax = 0,
    MLeft = 0;
    var Mask = false;
    var ulWidth = 0;

    $(function () {

        init();
        resize();
              
        $(".leftR").click(function () {
            if (!Mask) {
                if (Index > 1) {
                    LastIndex = Index;
                    Index--;
                    NowIndex = Index <= 4 ? 0 : (Index - 4);
                    setUlMove(Index);
                    
                }
            }
        });

        $(".rightR").click(function () {
            if (!Mask) {
                if (Index <= IndexMax) {
                    LastIndex = Index;
                    Index++;
                    NowIndex = Index <= 4 ? 0 : (Index - 4);
                    setUlMove(Index);
                }
            }
        });

        $("#ul_float li").click(function () {
            LastIndex = Index;
            Index = $(this).index() + 1;
            NowIndex = Index <= 4 ? 0 : (Index - 4);
            setUlMove(Index);
            
        });

        $(".div_RightLogo1").click(function (e) {
            e.stopPropagation();
            $("#enLargeLogo").css({
                left: ($(window).width() - $('#enLargeLogo').outerWidth()) / 2,
                top: ($(window).height() - $('#enLargeLogo').outerHeight()) / 2 + $(document).scrollTop() - 50
            })

            $("#enLargeLogo").fadeIn("fast");
        });

        $(document).click(function () {
            $("#enLargeLogo").fadeOut("fast");
        })

        $("#cad").click(function () {
            $("#huxingtu").css({
                left: ($(window).width() - $('#huxingtu').outerWidth()) / 2,
                top: ($(window).height() - $('#huxingtu').outerHeight()) / 2 - 100
            });
            $("#Mask").show();
            $("#huxingtu").show();
        })

        $("#huxingtu").click(function () {
            $("#Mask").hide();
            $("#huxingtu").hide();
        })

        $("#show").click(function () {
            $("#Mask").show();
            $("#abshow").animate({
                left: 0
            }, 500, function () {
                $("#show").hide();
                $("#hide").show();
            })
        })

        $("#hide").click(function () {

            $("#abshow").animate({
                left: -225
            }, 500, function () {
                $("#show").show();
                $("#hide").hide();
                $("#Mask").hide();
            })
        });

        $(".dropMore").click(function () {
            //$(".pt3").css({
            //    height: "auto"
            //});

            $(".pt3").animate({
                height: $("#pDetail").height()
            }, 300);
            $(".dropMore").hide();
        })

        $(".div_LeftBg").mousewheel(function (e,d) {
            if (d < 0)
            {
                if (!Mask) {
                    if (Index < IndexMax) {
                        LastIndex = Index;
                        Index++;
                        NowIndex = Index <= 4 ? 0 : (Index - 4);
                        setUlMove(Index);
                    }
                }
            }
            else if (d > 0)
            {
                if (!Mask) {
                    if (Index > 1) {
                        LastIndex = Index;
                        Index--;
                        NowIndex = Index <= 4 ? 0 : (Index - 4);
                        setUlMove(Index);
                    }
                }
            }
        })


        $(window).resize(function () {
            resize();
        })

    });

    function setUlMove(index) {
        $("#ul_float li").removeClass("on");
        $("#ul_float li").eq(Index - 1).attr("class", "on");
        $("#ul_Image li").eq(LastIndex - 1).fadeOut("fast", function () {
            $("#ul_Image li").eq(Index - 1).show();
        });
        SetUlAnimation();
    }

    function SetUlAnimation() {
        if (Index > LastIndex) {
            if ((Index + 1) * 115 > $(".div_ImgBg").width()) {
                MLeft = -((Index + 1) * 115 - $(".div_ImgBg").width())+33
                $("#ul_float").animate({
                    marginLeft: MLeft
                }, 300);
            }

        }
        else {
            if ((Index - 1) * 115 < Math.abs(MLeft)) {
                $("#ul_float").animate({
                    marginLeft: -(Index - 1) * 115-2
                }, 300);
            }
        }
    }

    function ulResize() {
        var ulWidth = $(".div_float").width();
        var ulLeft = Number($("#ul_float").css('marginLeft').replace(/px/, ""));
        Mask = true;
        var Margin = 0;
        if ((ulLeft)>(Index-1)*115)
            $("#ul_float").animate({
                marginLeft: -NowIndex * 115 + "px"
            }, 300, function () {
                Mask = false;
            })
    }

    function init() {
        $("#ul_Image li").eq(Index - 1).show();

        IndexMax = $("#ul_float li").size();
        $("#ul_float").width(IndexMax * 120);

        if ($("#pDetail").height() > 60)
        {
            $(".dropMore").show();
        }
    }

    function resize() {
        var Windowheight = $(window).height();
        var Windowwidth = $(window).width();
        var imgwidth = ($(".div_ImgBg").width());
        var imgheight = Windowheight - 264;
        if (imgheight < 400)
        {
            imgheight = 400;
        }
        if (imgheight < imgwidth) {
            $(".div_ImgBg").height(imgheight);
            $("#ul_Image").find("img").css({
                height: (imgheight) + "px",
                width: "auto"
            })
        }
        else {
            $(".div_ImgBg").height(Windowheight - 264);
            $("#ul_Image").find("img").css({
                height:"auto",
                width: imgwidth
            })
        }
        
        
        $(".div_float").width($(".div_FloatBg").width() - 60);
        ulWidth = $(".div_float").width();

        SetUlAnimation();
    }
})($, window);
