// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life | BCAL MPOS
// http://www.infoconnect.com.my


// SCRIPT CHANGER

function scriptJSON(stringModule, stringProduct)
{
	$("#ScriptJSONLayout").attr("src", "../../JavaScript/Minimized/layout" + stringFileScriptSeparator + stringModule + stringFileScriptSeparator + stringProduct + ".min.js");
	$("#ScriptJSONFormula").attr("src", "../../JavaScript/Minimized/formula" + stringFileScriptSeparator + stringModule + stringFileScriptSeparator + stringProduct + ".min.js");
	$("#ScriptJSONValue").attr("src", "../../JavaScript/Minimized/value" + stringFileScriptSeparator + stringModule + stringFileScriptSeparator + stringProduct + ".min.js");
}


// USER INTERFACE

function setContentHeightBasedOnScreen(stringLayoutExcludedJavaScriptID, stringLayoutAffectedJavaScriptID)
{
	var stringLayoutExcludedJQueryID = stringKres + stringLayoutExcludedJavaScriptID;
	var stringLayoutAffectedJQueryID = stringKres + stringLayoutAffectedJavaScriptID;
	var intWindowHeight = $(window).height();
	var intLayoutExcludedHeight = $(stringLayoutExcludedJQueryID).height();
	var intLayoutAffectedPaddingTop = $(stringLayoutAffectedJQueryID).css("padding-top");
	intLayoutAffectedPaddingTop = intLayoutAffectedPaddingTop.substring(0, intLayoutAffectedPaddingTop.length - 2);
	var intLayoutAffectedPaddingBottom = $(stringLayoutAffectedJQueryID).css("padding-bottom");
	intLayoutAffectedPaddingBottom = intLayoutAffectedPaddingBottom.substring(0, intLayoutAffectedPaddingBottom.length - 2);
	var intLayoutAffectedBorderTop = $(stringLayoutAffectedJQueryID).css("border-top-width");
	intLayoutAffectedBorderTop = intLayoutAffectedBorderTop.substring(0, intLayoutAffectedBorderTop.length - 2);
	var intLayoutAffectedBorderBottom = $(stringLayoutAffectedJQueryID).css("border-bottom-width");
	intLayoutAffectedBorderBottom = intLayoutAffectedBorderBottom.substring(0, intLayoutAffectedBorderBottom.length - 2);
	var intLayoutAffectedHeight = intWindowHeight - intLayoutExcludedHeight - intLayoutAffectedPaddingTop - intLayoutAffectedPaddingBottom - intLayoutAffectedBorderTop - intLayoutAffectedBorderBottom;

	$(stringLayoutAffectedJQueryID).height(intLayoutAffectedHeight);
}

function setupLayoutBasedOnScreen()
{
	$("nav, #Content").css("height", $(window).height());
	var intNavigationContainerHeight = $("nav").height();
	var intNavigationHeaderHeight = $("nav header").height();
	$("nav .NavigationList").height(intNavigationContainerHeight - intNavigationHeaderHeight);
}

function popUpToggle(stringCurtainJavaScriptID, stringPopUpJavaScriptID)
{
	/* INITIALIZE */

	var stringCurtainJQueryID = stringKres + stringCurtainJavaScriptID;
	var stringPopUpJQueryID = stringKres + stringPopUpJavaScriptID;

	/* APPEAR */

	if ($(stringPopUpJQueryID).css("display") == "none")
	{
		if ($(stringCurtainJQueryID).css("display") == "none")
		{
			$(stringCurtainJQueryID).css("display", "block");
		}
		else
		{

		}

		$(stringPopUpJQueryID).css("display", "block");
	}
	else
	{
		if ($(stringCurtainJQueryID).css("display") == "block")
		{
			$(stringCurtainJQueryID).css("display", "none");
		}
		else
		{
			
		}

		$(stringPopUpJQueryID).css("display", "none");
	}
}

function curtainToggle(stringCurtainJavaScriptID, booleanState)
{
	/* INITIALIZE */

	var stringCurtainJQueryID = stringKres + stringCurtainJavaScriptID;


	/* APPEAR */

	if (booleanState == null || booleanState == undefined)
	{
		if ($(stringCurtainJQueryID).css("display") == "none")
		{
			$(stringCurtainJQueryID).css("display", "block");
		}
		else
		{
			$(stringCurtainJQueryID).css("display", "none");
		}
	}
	else
	{
		if (booleanState == true)
		{
			$(stringCurtainJQueryID).css("display", "block");
		}
		else
		{
			$(stringCurtainJQueryID).css("display", "none");
		}
	}	
}

function fieldsetChanger(stringSelectJavaScriptID)
{
	/* INITIALIZE */

	var stringSelectedOption;
	var stringSelectedFieldset;
	var stringSelectJQueryID = stringKres + stringSelectJavaScriptID;

	stringSelectedOption = getGeneralSelectForm(stringSelectJavaScriptID);

	/* APPEAR */

	$(stringSelectJQueryID).siblings("fieldset").each(function()
	{
		stringSelectedFieldset = $(this).attr("id");

		if (stringSelectedOption.toLowerCase() == stringSelectedFieldset.toLowerCase())
		{
			$(this).css("display", "block");
		}
		else
		{
			$(this).css("display", "none");
		}
	});
}

function findDirectory(stringListJavaScriptClass, stringInputJavaScriptID)
{
	var stringListJQueryClass = stringDot + stringListJavaScriptClass;
	var stringInputJQueryID = stringKres + stringInputJavaScriptID;
	var stringListText;
	var stringInputValue = $(stringInputJQueryID).val();

	if (stringInputValue == "" || stringInputValue == undefined || stringInputValue == null || stringInputValue.length == 0)
	{
		$(stringListJQueryClass).each(function()
		{
			$(this).css("display", "block");
		});
	}
	else
	{
		$(stringListJQueryClass).each(function()
		{
			stringListText = $($(this).contents()[0]).text().toLowerCase();
			
			if (stringListText.indexOf(stringInputValue.toLowerCase()) >= 0)
			{
				$(this).css("display", "block");
			}
			else
			{
				$(this).css("display", "none");
			}
		});
	}
}

function filterSelectByInfix(stringInputParentJavaScriptID, stringInputChildJavaScriptID)
{
	var stringInputParentJQueryID = stringKres + stringInputParentJavaScriptID;
	var stringInputChildJQueryID = stringKres + stringInputChildJavaScriptID;
	var stringInputParentValue = getGeneralSelectForm(stringInputParentJavaScriptID);
	var stringInputChildValue;
	var JSONSelectOption = [];

	$(stringInputChildJQueryID + " option").each(function()
	{
		JSONSelectOption.push({ text: $(this).text(), value: $(this).attr("value") });
	});

	stringInputChildValue = getInfix(releasePrefix($(this).attr("value"))).toLowerCase();

		if (stringInputChildValue == stringInputParentValue.toLowerCase())
		{
			
		}
		else
		{
			$(this).attr('disabled', 'disabled').hide();
		}
}


// GET EXTRA

function getURLParameter() 
{
	var stringParameter = {};
	var stringURL = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
	function(m, key, value) 
	{
		stringParameter[key] = value;
	});
	
	return stringParameter;
}

function getJSONFromURL(stringJSONName, JSONDummy)
{
	var JSONPackage = [];
	var JSONPackageTemporary = getURLParameter()[stringJSONName];
	
	if (JSONPackageTemporary == null | JSONPackageTemporary == undefined | JSONPackageTemporary == "")
	{
		if (JSONDummy == null | JSONDummy == undefined | JSONDummy == "")
		{

		}
		else
		{
			JSONPackage = JSONDummy;
		}
	}
	else
	{
		JSONPackage = JSON.parse(unescape(JSONPackageTemporary));
	}

	return JSONPackage;
}


// NAVIGATION

function navigationPanel()
{
	var stringNavigationLayoutJQueryID = "nav";
	var stringMainLayoutJQueryID = "#Content";
	var stringCurtainLayoutJavaScriptID = "CurtainMain";
	var stringCurtainLayoutJQueryID = stringKres + stringCurtainLayoutJavaScriptID;
	var stringPopUpClass = "PopUp";
	var stringNavigationLayoutState;
	
	stringNavigationLayoutState = $(stringNavigationLayoutJQueryID).css("left");

	if (stringNavigationLayoutState == stringNavigationLeftSlideOut)
	{
		$(stringNavigationLayoutJQueryID).css("left", stringNavigationLeftSlideIn);
		// $(stringMainLayoutJQueryID).css("margin-left", stringMainLeftSlideIn);
		cssPrefix(stringMainLayoutJQueryID, "transform", "translateZ(-50px)")
		$(stringCurtainLayoutJQueryID).css("display", "block");
	}
	else
	{
		$(stringNavigationLayoutJQueryID).css("left", stringNavigationLeftSlideOut);
		// $(stringMainLayoutJQueryID).css("margin-left", stringMainLeftSlideOut);
		cssPrefix(stringMainLayoutJQueryID, "transform", "translateZ(0px)");
		$(stringCurtainLayoutJQueryID).css("display", "none");
	}
}


// JSON

function JSONFilter(JSONConfig, arrayConfigKey, arrayConfigValue, stringConfigOutputKey)
{
	var JSONConfigOutput;
	var booleanSelect;
	
	for (var i = 0; i < JSONConfig.length; i++)
	{
		booleanSelect = true;

		for (var j = 0; j < arrayConfigKey.length; j++)
		{
			if (JSONConfig[i][arrayConfigKey[j]] == arrayConfigValue[j])
			{
				
			}
			else
			{
				booleanSelect = false;
			}
		}

		if (booleanSelect == true)
		{
			if (stringConfigOutputKey == null | stringConfigOutputKey == undefined | stringConfigOutputKey == "")
			{
				JSONConfigOutput = JSONConfig[i];
			}
			else
			{
				JSONConfigOutput = JSONConfig[i][stringConfigOutputKey];
			}
			
			i = JSONConfig.length;
		}
		else
		{

		}
	}
	
	return JSONConfigOutput;
}

function JSONCustomAdd(JSONConfig, arrayConfigKey, arrayConfigValue)
{
	var stringHTML = "";

	for (var i = 0; i < arrayConfigKey.length; i++)
	{
		if (i == 0)
		{

		}
		else
		{
			stringHTML += stringJSONArraySeparator;
		}

		if (arrayConfigValue[i] == null || arrayConfigValue[i] == undefined || arrayConfigValue[i] == "")
		{
			arrayConfigValue[i] = "";
		}
		else
		{

		}

		stringHTML += arrayConfigKey[i] + stringDoubleDot + "'" + arrayConfigValue[i] + "'";
	}
	
	eval("JSONConfig.push({ " + stringHTML + " })");
}

function JSONCustomDelete(JSONConfig, arrayConfigKey, arrayConfigValue)
{
    var JSONConfigOutput;
	var booleanSelect;
	
	for (var i = 0; i < JSONConfig.length; i++)
	{
		booleanSelect = true;

		for (var j = 0; j < arrayConfigKey.length; j++)
		{
			if (JSONConfig[i][arrayConfigKey[j]] == arrayConfigValue[j])
			{
				
			}
			else
			{
				booleanSelect = false;
			}
		}

		if (booleanSelect == true)
		{
			JSONConfig.splice(i, 1);
			i = JSONConfig.length;
		}
		else
		{

		}
	}
	
	return JSONConfigOutput;
}


/* SELECT */

function generateSelectOptionByJSONLayoutForInputSection(JSONProduct, arrayInputSection, stringProductKey)
{
	// INITIALIZATION

	var stringJSONProductKey;
	var stringJSONProductState;

	var JSONSection = [];
	var stringJSONSectionKey;
	var stringJSONSectionText;
	var stringJSONSectionState;
	var booleanSectionFirst = true;

	var JSONSelect = [];

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey, stringJSONKeyProductState], [stringProductKey, stringStateTrue], null);
	JSONSection = JSONProductFiltered[stringJSONKeyProductContent];
	
	for (var j = 0; j < JSONSection.length; j++)
	{
		stringJSONSectionState = JSONSection[j][stringJSONKeySectionState];

		if (stringJSONSectionState == stringStateTrue)
		{
			if (booleanSectionFirst == true)
			{
				JSONSelect.push({ value : stringStateNotSelected, text : "Please Select"});
			}
			else
			{

			}

			stringJSONSectionKey = JSONSection[j][stringJSONKeySectionKey];
			stringJSONSectionText = JSONSection[j][stringJSONKeySectionText];
			
			JSONSelect.push({ value : stringJSONSectionKey, text : stringJSONSectionText});
			booleanSectionFirst = false;
		}
		else
		{

		}
	}
	
	if (JSONSelect == null || JSONSelect == undefined || JSONSelect == "")
	{

	}
	else
	{
		for (var i = 0; i < arrayInputSection.length; i++)
		{
			generateSelectOption(arrayInputSection[i], JSONSelect);
		}
	}

	return JSONSelect;
}

function generateSelectOptionByJSONLayoutForInputKey(JSONProduct, arrayInputKey, stringProductKey)
{
	// INITIALIZATION

	var stringJSONProductKey;
	var stringJSONProductState;

	var JSONSection;
	var stringJSONSectionKey;
	var stringJSONSectionText;
	var stringJSONSectionState;
	
	var JSONInput
	var stringJSONInputKey;
	var stringJSONInputState;
	var booleanInputFirst = true;

	var JSONSelect = [];

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey, stringJSONKeyProductState], [stringProductKey, stringStateTrue], null);
	JSONSection = JSONProductFiltered[stringJSONKeyProductContent];

	for (var j = 0; j < JSONSection.length; j++)
	{
		stringJSONSectionState = JSONSection[j][stringJSONKeySectionState];

		if (stringJSONSectionState == stringStateTrue)
		{
			stringJSONSectionKey = JSONSection[j][stringJSONKeySectionKey];
			JSONInput = JSONSection[j][stringJSONKeySectionContent][stringJSONKeyInput];
			
			for (var k = 0; k < JSONInput.length; k++)
			{
				stringJSONInputState = JSONInput[k][stringJSONKeyInputState];

				if (stringJSONInputState != stringStateFalse)
				{
					if (booleanInputFirst == true)
					{
						JSONSelect.push({ value : stringStateNotSelected, text : "Please Select"});
					}
					else
					{

					}

					stringJSONInputKey = JSONInput[k][stringJSONKeyInputKey];

					JSONSelect.push({ value : stringJSONInputKey, text : stringJSONInputKey});
					booleanInputFirst = false;
				}
				else
				{

				}
			}
		}
		else
		{

		}
	}

	if (JSONSelect == null || JSONSelect == undefined || JSONSelect == "")
	{

	}
	else
	{
		for (var i = 0; i < arrayInputKey.length; i++)
		{
			generateSelectOption(arrayInputKey[i], JSONSelect);
		}
	}

	return JSONSelect;
}