angular.module("tabController", [])
.controller("TabController", ["$scope", function($scope){

	$scope.entries = [
		{ color: "red", 
		content1: "Red is the color at the end of the spectrum of visible light next to orange and opposite violet.[3] It is evoked by light with a predominant wavelength of roughly 620–740 nm. Red is one of the additive primary colors of light, along with green and blue, which in RGB color systems are combined to create all the colors on a computer monitor or television screen. It is also one of the subtractive primary colors, along with yellow and blue, of the RYB color space and traditional color wheel used by painters and artists.",
        content2: "Reds can vary in shade from very light pink to very dark maroon or burgundy; and in hue from the bright orange-red scarlet or vermilion to the bluish-red crimson.",
        content3: "Red was widely used in prehistoric cave art, made with red hematite or iron oxide, or red ochre. Early civilizations in China, the Middle East and Europe made red dyes from the madder plant or from the a tiny insect called the kermes vermilio, Civilizations in the Americas made brilliant reds from another scale insect, the cochineal, Ancient Chinese artists during the Han Dynasty used dye from the madder plant to color silk and pigments from lead oxide to color pottery.",
        active: true,
      	},
      	{ color: "green",
      	content1: "Green is the color between blue and yellow on the spectrum of visible light, It is evoked by light with a predominant wavelength of roughly 495–570 nm. In the subtractive color system, used in painting and color printing, it is created by a combination of yellow and blue, or yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors.",
		content2: "The modern English word green comes from the Middle English and Anglo-Saxon word grene, from the same Germanic root as the words 'grass' and 'grow'.[1] It is the color of living grass and leaves[2][3] and as a result is the color most associated with springtime, growth and nature.[4] By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content.",
        content3:"In surveys made in Europe and the United States, green is the color most commonly associated with nature, youth, spring, hope and envy.[4] In Europe and the U.S. green is sometimes associated with death, sickness, or the devil, but in China its associations are very positive, as the symbol of fertility.[4] Because of its association with youth, it is sometimes used to describe someone who is inexperienced. In the Middle Ages and Renaissance, when the color of clothing showed the owner's social status, green was worn by merchants, bankers and the gentry, while red was the color of the nobility. The Mona Lisa by Leonardo da Vinci wears green, showing she is not from noble family; the benches in in the British House of Commons are green, while those in the House of Lords are red.[5] Green is also the traditional color of safety and permission; a green light means go ahead, a green card permits permanent residence in the United States.[5] It is the most important color in Islam. It was the color of the banner of Muhammad, and is found in the flags of nearly all Islamic countries, and represents the lush vegetation of Paradise.[6] It is also often associated with the culture of Gaelic Ireland, and is a color of the flag of Ireland. Because of its association with nature, it is the color of the environmental movement. Political groups advocating environmental protection and social justice describe themselves as part of the Green movement, some naming themselves Green parties. This has led to similar campaigns in advertising, as companies have sold green, or environmentally friendly, products.",
      	},
      	{ color: "blue", 
      	content1: "Blue is the colour between violet and green on the optical spectrum of visible light. Human eyes perceive blue when observing light with a wavelength between 450 and 495 nanometres. Blues with a higher frequency and thus a shorter wavelength gradually look more violet, while those with a lower frequency and a longer wavelength gradually appear more green. Pure blue, in the middle, has a wavelength of 470 nanometres. In painting and traditional colour theory, blue is one of the three primary colours of pigments, along with red and yellow, which can be mixed to form a wide gamut of colours. Red and blue mixed together form violet, blue and yellow together form green. Blue is also a primary colour in the RGB color model, used to create all the colors on the screen of a television or computer monitor.",
      	content2: "The modern English word blue comes from Middle English bleu or blewe, from the Old French bleu, a word of Germanic origin, related to the Old High German word blao.[2] The clear sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. When sunlight passes through the atmosphere, the blue wavelengths are scattered more widely by the oxygen and nitrogen molecules, and more blue comes to our eyes. Rayleigh scattering also explains blue eyes; there is no blue pigment in blue eyes. Distant objects appear more blue because of another optical effect called atmospheric perspective.",
        content3: "Blue has been used for art, decoration and as a clothing dye since ancient times. The semi-precious stone lapis lazuli, coming from mines in Afghanistan, was used in ancient Egypt for jewelry and ornament and later, in The Renaissance, to make the pigment ultramarine, the most expensive of all pigments. In the Middle Ages, cobalt blue was used to colour the stained glass windows of cathedrals. Beginning in the 9th century, Chinese artist used cobalt to make fine blue and white porcelain. Blue dyes for clothing were made from woad in Europe and indigo in Asia and Africa. In 1828 a synthetic ultramarine pigment was developed, and synthetic blue dyes and pigments gradually replaced mineral pigments and vegetable dyes. Pierre-Auguste Renoir, Vincent van Gogh and other late 19th century painters used ultramarine and cobalt blue not just to depict nature, but to create moods and emotions. In the late 18th century and 19th century, blue became a popular colour for military uniforms and police uniforms. In the 20th century, because blue was commonly associated with harmony, it was chosen as the colour of the flags of the United Nations and the European Union. Toward the end of the 20th century, dark blue replaced black and gray as the most common colour for business suits, because it was seen as serious without being grim.",
      	}
	]

	var displayByColor = function(color) {
		for (var e = 0; e < $scope.entries.length; e++) {
			if ($scope.entries[e].color === color) {
				$scope.entries[e].active = true
				console.log($scope.entries[e])
			} else {
				$scope.entries[e].active = false
			}
		}
	}

  // Your code goes here
  $scope.setDisplay= function(color){
  	displayByColor(color)
  }
  
}])