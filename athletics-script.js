$(".sport").hover(function(){
  if (this.id === 'b-Cross-Country'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/b-Cross-Country-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 0'
    })
  }
  if (this.id === 'g-Cross-Country'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/g-Cross-Country-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'Football'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/football-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'g-Golf'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/g-Golf-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 35%'
    })
  }
  if (this.id === 'g-Tennis'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/g-Tennis-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'g-Volleyball'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/g-Volleyball-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'b-Water-Polo'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/b-Water-Polo-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
  if (this.id === 'Cheer'){
    $('.SeasonalSlide').css({
      'background': 'url(Athletic-Pictures/Cheer-banner.jpg)',
      'background-size': 'cover',
      'background-position': '50% 20%'
    })
  }
});
