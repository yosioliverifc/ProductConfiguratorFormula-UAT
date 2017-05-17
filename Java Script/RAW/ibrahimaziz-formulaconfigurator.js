// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life | BCAL MPOS
// http://www.infoconnect.com.my


// GENERATOR

function generateFormulaDirectory(JSONConfig, stringLayoutJavaScriptID)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	$(stringLayoutJQueryID).empty();
	
	var stringJSONProductKey;
	var stringJSONProductText;
	var JSONProductContent = [];
	var stringJSONProductState;

	var stringJSONFormulaKey;
	var stringJSONFormulaText;
	var JSONFormula = [];
	var stringJSONFormulaState;

	var stringHTML = "";

	/* PRODUCT FILTER */

	for (var i = 0; i < JSONConfig.length; i++)
	{
		stringJSONProductState = JSONConfig[i].productState;

		if (stringJSONProductState == stringStateTrue)
		{
			stringJSONProductKey = JSONConfig[i].productKey;

			if (i == 0)
			{
				stringHTML += "<ul class='DirectoryProduct'>";
			}
			else
			{

			}

			stringHTML += "<li class='ListProduct'>" + JSONConfig[i].productText;
			stringHTML += "<input type=\"button\" class=\"ButtonAddSecondary ButtonIcon\" onclick=\"addFormulaForm(JSONLayoutFromURL, arrayInputSection, arrayInputKey, '" + JSONConfig[i].productKey + "')\">";
			JSONProductContent = JSONConfig[i].productContent;
			JSONFormula = JSONProductContent.formula;
			
			if (JSONFormula.length != 0)
			{
				/* SECTION FILTER */

				for (var j = 0; j < JSONFormula.length; j++)
				{
					if (j == 0)
					{
						stringHTML += "<br><ul class='DirectorySection'>";
					}
					else
					{

					}

					/* PRINT LIST */

					stringJSONFormulaKey = JSONFormula[j].formulaKey;
					stringHTML += "<li class='ListSection'>" + JSONFormula[j].formulaText;
					stringHTML += "<input type=\"button\" class=\"ButtonDeleteSecondary ButtonIcon\" onclick=\"deleteDirectory(JSONFormulaFromURL, '" + stringJSONProductKey + "', '" + stringJSONFormulaKey + "')\">";
					stringHTML += "<input type=\"button\" class=\"ButtonEditSecondary ButtonIcon\" onclick=\"setFormulaForm('LayoutContainer', JSONLayoutFromURL, JSONFormulaFromURL, '" + stringJSONProductKey + "', '" + stringJSONFormulaKey + "')\">";
					stringHTML += "</li>";
				}

				stringHTML += "</ul>";
			}
			else
			{
				
			}

			stringHTML += "</li>";
		}
		else
		{

		}
	}

	$(stringLayoutJQueryID).html(stringHTML);
}


// FORMULA

function addFormulaForm(JSONLayout, arrayInputSection, arrayInputKey, stringProductKey)
{
	/* INITIALIZATION */

	$("#SpanHeaderProduct").attr("data-product-key", stringProductKey);
	var stringFormulaKeyJavaScriptID = "TextFormulaConfiguratorFormulaKey";
	var stringFormulaKeyJQueryID = stringKres + stringFormulaKeyJavaScriptID;

	/* SET INPUT */

	JSONInputSection = generateSelectOptionByJSONLayoutForInputSection(JSONLayout, arrayInputSection, stringProductKey);
	JSONInputKey = generateSelectOptionByJSONLayoutForInputKey(JSONLayout, arrayInputKey, stringProductKey);

	/* SET UI */

	$(stringFormulaKeyJQueryID).prop("readonly", false);
	resetSpecific("MainContent", ["FormulaContent"]);
	curtainToggle("CurtainNoItemSelected", false);
}

function setFormulaForm(stringLayoutJavaScriptID, JSONLayout, JSONProduct, stringProductKey, stringFormulaKey)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	var stringJSONProductText;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONFormula;
	var stringJSONFormulaKey;
	var stringJSONFormulaText;
	var stringJSONFormulaState;
	var stringJSONFormulaContent;
	var stringJSONFormulaInputKey;
	var JSONFormulaFiltered;

	var stringFormulaKeyJavaScriptID = "TextFormulaConfiguratorFormulaKey";
	var stringFormulaKeyJQueryID = stringKres + stringFormulaKeyJavaScriptID;

	/* SET INPUT */

	JSONInputSection = generateSelectOptionByJSONLayoutForInputSection(JSONLayout, arrayInputSection, stringProductKey);
	JSONInputKey = generateSelectOptionByJSONLayoutForInputKey(JSONLayout, arrayInputKey, stringProductKey);

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
	JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
	stringJSONProductText = JSONProductFiltered[stringJSONKeyProductText];
	
	/* FORMULA FILTER */

	JSONFormula = JSONProductContent[stringJSONKeyFormula];
	JSONFormulaFiltered = JSONFilter(JSONFormula, [stringJSONKeyFormulaKey], [stringFormulaKey], null);

	stringJSONFormulaKey = JSONFormulaFiltered[stringJSONKeyFormulaKey];
	stringJSONFormulaState = JSONFormulaFiltered[stringJSONKeyFormulaState];
	stringJSONFormulaText = JSONFormulaFiltered[stringJSONKeyFormulaText];
	stringJSONFormulaContent = JSONFormulaFiltered[stringJSONKeyFormulaContent];
	stringJSONFormulaInputKey = JSONFormulaFiltered[stringJSONKeyInputKey];

	/* UPDATE FORM */

	resetSpecific("MainContent", ["FormulaContent"]);
	
	$(stringFormulaKeyJQueryID).prop("readonly", true);
	$("#SpanHeaderProduct").text(stringJSONProductText);
	$("#SpanHeaderFormula").text(stringJSONFormulaText);
	$("#TitleHeaderFormula").text(stringJSONFormulaText);
	$("#SpanHeaderProduct").attr("data-product-key", stringProductKey);
	$("#SpanHeaderFormula").attr("data-formula-key", stringJSONFormulaKey);

	setGeneralTextForm("TextFormulaConfiguratorFormulaKey", stringJSONFormulaKey);
	setGeneralTextForm("TextFormulaConfiguratorFormulaText", stringJSONFormulaText);
	setGeneralSelectForm("SelectFormulaConfiguratorInputResultSection", getInfix(releasePrefix(stringJSONFormulaInputKey)).toLowerCase());
	setGeneralSelectForm("SelectFormulaConfiguratorInputResultKey", stringJSONFormulaInputKey);
	setGeneralSelectForm("SelectFormulaConfiguratorFormulaState", stringJSONFormulaState);

	formulaContentGenerator(stringJSONFormulaContent, "FormulaContent", "SpanFormulaDetail");

	curtainToggle("CurtainNoItemSelected", false);
}

function deleteDirectory(JSONProduct, stringProductKey, stringFormulaKey)
{
	if (confirm("Are you sure you want to delete this formula ?."))
	{
		/* PRODUCT FILTER */

		JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
		JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
		stringJSONProductText = JSONProductFiltered[stringJSONKeyProductText];
		
		/* FORMULA FILTER */

		JSONFormula = JSONProductContent[stringJSONKeyFormula];
		JSONCustomDelete(JSONFormula, [stringJSONKeyFormulaKey], [stringFormulaKey]);
		resetSpecific("MainContent", ["FormulaContent"]);
		curtainToggle("CurtainNoItemSelected", true);
		generateFormulaDirectory(JSONFormulaFromURL, "GeneratedFormula");
	}
	else
	{

	}
}


// UI

/* INPUT */

function generateSelectOptionByJSONInput(JSONInput)
{
	/* INITIALIZE */

	var stringJSONInputKey;
	var stringJSONInputType;
	var stringJSONInputPlaceholder;
	var stringJSONInputValue;
	var stringJSONInputState;
	
	for (var i = 0; i < JSONInput.length; i++)
	{
		stringJSONInputKey = JSONInput[i].inputKey;
		stringJSONInputType = JSONInput[i].inputType;
		stringJSONInputPlaceholder = JSONInput[i].inputPlaceholder;
		stringJSONInputValue = JSONInput[i].inputValue;
		stringJSONInputState = JSONInput[i].inputState;

		var JSONSelect = [];
		var arrayInputPlaceholder = stringJSONInputPlaceholder.split(stringJSONArraySeparator);
		var arrayInputValue = stringJSONInputValue.split(stringJSONArraySeparator);

		for (var j = 0; j < arrayInputValue.length; j++)
		{
			JSONSelect.push({ value : arrayInputValue[j], text : arrayInputPlaceholder[j]});
		}
		
		generateSelectOption(stringJSONInputKey, JSONSelect);
	}

	return JSONSelect;
};

function generateSelectOptionByInfix(stringSelectJavaScriptID, stringSelectAffectedJavaScriptID, JSONSelect)
{
	/* INITIALIZE */

	var stringSelectJQueryID = stringKres + stringSelectJavaScriptID;
	var stringSelectAffectedJQueryID = stringKres + stringSelectAffectedJavaScriptID;
	var stringKeyWithoutPrefix;
	var stringKeyInfix;
	var stringKey;
	var stringOptionAdded = "";
	
	/* GENERATE VALUE */

	stringKey = $(stringSelectJQueryID).val();

	for (var i = 0; i < JSONSelect.length; i++)
	{
		stringKeyWithoutPrefix = releasePrefix(JSONSelect[i].value);
		stringKeyInfix = getInfix(stringKeyWithoutPrefix);

		if (stringKey == stringStateNotSelected)
		{
			stringOptionAdded += "<option value='" + JSONSelect[i].value + "'>" + JSONSelect[i].text + "</option>";
		}
		else
		{
			if (stringKey.toLowerCase() == stringKeyInfix.toLowerCase())
			{
				stringOptionAdded += "<option value='" + JSONSelect[i].value + "'>" + JSONSelect[i].text + "</option>";
			}
			else
			{

			}
		}
	}

	if (stringOptionAdded == null || stringOptionAdded == undefined || stringOptionAdded == "")
	{

	}
	else
	{
		$(stringSelectAffectedJQueryID).empty();
		$(stringSelectAffectedJQueryID).html(stringOptionAdded);
	}
}

function generateJSONSelectOptionByJSONInput(JSONInputFromURL, stringInputKey)
{
	var JSONSelectOption = [];
	var stringJSONInputKey;
	var stringJSONInputPlaceholder;
	var stringJSONInputValue;
	var arrayJSONSelectOptionText;
	var arrayJSONSelectOptionValue;
	var booleanFirst;

	for (var i = 0; i < JSONInputFromURL.length; i++)
	{
		stringJSONInputKey = JSONInputFromURL[i].inputKey;

		if(stringJSONInputKey == stringInputKey)
		{
			stringJSONInputPlaceholder = JSONInputFromURL[i].inputPlaceholder;
			stringJSONInputValue = JSONInputFromURL[i].inputValue;
			arrayJSONSelectOptionText = stringJSONInputPlaceholder.split(stringJSONArraySeparator);
			arrayJSONSelectOptionValue = stringJSONInputValue.split(stringJSONArraySeparator);
			booleanFirst = true;

			for (var j = 0; j < arrayJSONSelectOptionValue.length; j++)
			{
				if (booleanFirst == true)
				{
					JSONSelectOption.push({ value : stringStateNotSelected, text : "Please Select"});
					booleanFirst = false;
				}
				else
				{

				}

				JSONSelectOption.push({ value : arrayJSONSelectOptionValue[j], text : arrayJSONSelectOptionText[j] });
			}

			i = JSONInputFromURL.length;
		}
		else
		{

		}
	}

	return JSONSelectOption;
}


// FORMULA

/* FORMULA EQUATION SETTER & GETTER */

function formulaContentGenerator(stringFormulaContent, stringFormulaJavaScriptID)
{
	if (stringFormulaContent == undefined || stringFormulaContent == null || stringFormulaContent == "")
	{
		
	}
	else
	{
		if(stringFormulaContent.length != 0)
		{
			var arrayFormulaContent = stringFormulaContent.split(stringJSONArraySeparator);
			var stringFormulaJQueryID = stringKres + stringFormulaJavaScriptID;

			$(stringFormulaJQueryID).empty();
			
			for (var i = 0; i < arrayFormulaContent.length; i++)
			{
				$(stringFormulaJQueryID).append(generateFormula(arrayFormulaContent[i], indicatorPrefix(arrayFormulaContent[i]), false, true, true));
			}
			
			formulaVerificator(stringFormulaJavaScriptID);
		}
		else
		{

		}
	}
}

function formulaTemporaryContentGenerator(stringFormulaContent, stringFormulaJavaScriptID)
{
	if (stringFormulaContent == undefined || stringFormulaContent == null || stringFormulaContent == "")
	{
		
	}
	else
	{
		if(stringFormulaContent.length != 0)
		{
			var arrayFormulaContent = stringFormulaContent.split(stringJSONArraySeparator);
			var stringFormulaJQueryID = stringKres + stringFormulaJavaScriptID;

			$(stringFormulaJQueryID).empty();
			
			for (var i = 0; i < arrayFormulaContent.length; i++)
			{
				$(stringFormulaJQueryID).append(generateFormulaTemporary(arrayFormulaContent[i], indicatorPrefix(arrayFormulaContent[i]), false, false, true));
			}
			
			formulaVerificator(stringFormulaJavaScriptID);
		}
		else
		{

		}
	}
}

function generateFormula(stringFormulaHeader, stringFormulaDetail, booleanView, booleanEdit, booleanDelete)
{
	var stringHTML = "";

	stringHTML +=
	"<div class='FormulaContainer' id='" + stringFormulaHeader + "'>" +
	"<span class='SpanFormulaHeader'>" + stringFormulaHeader + "</span>" +
	"<span class='SpanFormulaDetail'>" + stringFormulaDetail + "</span>";

	if (booleanView == true | booleanEdit == true | booleanDelete == true)
	{
		stringHTML += "<div class='PositionerCenter Center'>";
	}
	else
	{

	}

	if (booleanView == true)
	{
		stringHTML += "<input type='button' class='ButtonFormula ButtonSearchPrimary' value=''>";
	}
	else
	{

	}

	if (booleanEdit == true)
	{
		stringHTML += "<input type='button' class='ButtonFormula ButtonEditPrimary' value=''>";
	}
	else
	{

	}

	if (booleanDelete == true)
	{
		stringHTML += "<input type='button' class='ButtonFormula ButtonDeletePrimary' value='' onclick='formulaContentDelete(JSONFormulaFromURL, this, \"FormulaContent\")'>";
	}
	else
	{

	}

	if (booleanView == true | booleanEdit == true | booleanDelete == true)
	{
		stringHTML += "</div>";
	}
	else
	{

	}

	stringHTML += "</div>";

	return stringHTML;
}

function generateFormulaTemporary(stringFormulaHeader, stringFormulaDetail, booleanView, booleanEdit, booleanDelete)
{
	var stringHTML = "";

	stringHTML +=
	"<div class='FormulaContainer' id='" + stringFormulaHeader + "'>" +
	"<span class='SpanFormulaHeader'>" + stringFormulaHeader + "</span>" +
	"<span class='SpanFormulaDetail'>" + stringFormulaDetail + "</span>";

	if (booleanView == true | booleanEdit == true | booleanDelete == true)
	{
		stringHTML += "<div class='PositionerCenter Center'>";
	}
	else
	{

	}

	if (booleanView == true)
	{
		stringHTML += "<input type='button' class='ButtonFormula ButtonSearchPrimary' value=''>";
	}
	else
	{

	}

	if (booleanEdit == true)
	{
		stringHTML += "<input type='button' class='ButtonFormula ButtonEditPrimary' value=''>";
	}
	else
	{

	}

	if (booleanDelete == true)
	{
		stringHTML += "<input type='button' class='ButtonFormula ButtonDeletePrimary' value='' onclick='formulaContentDeleteTemporary(JSONFormulaFromURL, this, \"FormulaContent\")'>";
	}
	else
	{

	}

	if (booleanView == true | booleanEdit == true | booleanDelete == true)
	{
		stringHTML += "</div>";
	}
	else
	{

	}

	stringHTML += "</div>";

	return stringHTML;
}


/* FORMULA EQUATION ACTION */

function formulaTemporaryContentAdd(JSONFormula, arrayInput, stringPopUpJavaScriptID, stringFormulaJavaScriptID)
{
	/* GET VALUE */

	var stringInputJQueryID;
	var stringInputValue;
	var booleanAdd = false;
	var booleanFirst = true;

	for (var i = 0; i < arrayInput.length; i++)
	{
		stringInputJQueryID = stringKres + arrayInput[i];

		if ($(stringInputJQueryID).parent().css("display") != "none")
		{
			stringInputValue = getGeneralInputForm(arrayInput[i]);
		}
		else
		{

		}
	}

	/* JSON FILTER */

	var stringFormulaContent;

	if (stringInputValue == null | stringInputValue == undefined | stringInputValue == "")
	{
		
	}
	else
	{
		if (JSONFormula[stringJSONKeyFormulaContent].length == 0)
		{
			JSONFormula[stringJSONKeyFormulaContent] = stringInputValue;
		}
		else
		{
			JSONFormula[stringJSONKeyFormulaContent] += stringJSONArraySeparator + stringInputValue;
		}
		
		booleanAdd = true;
	}

	/* CLOSING */

	if (booleanAdd == true)
	{
		previewJSONFormulaSingle(JSONFormula);
		popUpToggle(stringCurtainJavaScriptID, stringPopUpJavaScriptID);
		formulaTemporaryContentGenerator(JSONFormula[stringJSONKeyFormulaContent], stringFormulaJavaScriptID);
	}
	else
	{

	}
}

function formulaContentAdd(JSONProduct, arrayInput, stringPopUpJavaScriptID, stringFormulaJavaScriptID)
{
	/* INITIALIZATION */
	
	var stringInputJQueryID;
	var stringInputValue;

	var stringProductKeyJQueryID = stringKres + "SpanHeaderProduct";
	var stringProductKey = $(stringProductKeyJQueryID).attr("data-product-key");
	var stringFormulaKey = getGeneralTextForm("TextFormulaConfiguratorFormulaKey");

	var stringJSONProductKey;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONConstant;
	var stringJSONFormulaKey;
	var stringJSONFormulaText;
	var stringJSONFormulaState;

	
	/* GET VALUE */

	for (var i = 0; i < arrayInput.length; i++)
	{
		stringInputJQueryID = stringKres + arrayInput[i];

		if ($(stringInputJQueryID).parent().css("display") != "none")
		{
			stringInputValue = getGeneralInputForm(arrayInput[i]);
		}
		else
		{

		}
	}

	/* JSON FILTER */

	var stringFormulaContent;

	if (stringInputValue == null | stringInputValue == undefined | stringInputValue == "")
	{
		
	}
	else
	{
		/* PRODUCT FILTER */

		JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
		JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
		JSONFormula = JSONProductContent[stringJSONKeyFormula];
			
		/* FORMULA FILTER */

		for (var j = 0; j < JSONFormula.length; j++)
		{
			stringJSONFormulaKey = JSONFormula[j][stringJSONKeyFormulaKey];
			
			if (stringJSONFormulaKey == stringFormulaKey)
			{
				/* FORMULA INSERT / UPDATE */
				
				if (JSONFormula[j][stringJSONKeyFormulaContent].length == 0)
				{
					JSONFormula[j][stringJSONKeyFormulaContent] = stringInputValue;
				}
				else
				{
					JSONFormula[j][stringJSONKeyFormulaContent] += stringJSONArraySeparator + stringInputValue;
				}

				previewJSONFormulaSingle(JSONFormula[j]);
				popUpToggle(stringCurtainJavaScriptID, stringPopUpJavaScriptID);
				formulaContentGenerator(JSONFormula[j][stringJSONKeyFormulaContent], stringFormulaJavaScriptID);
				
				j = JSONFormula.length;
			}
			else
			{

			}
		}
	}
}

function formulaContentDelete(JSONProduct, elementLayout, stringFormulaJavaScriptID)
{
	var stringLayoutJavaScriptID = $(elementLayout).parent().parent().attr("id");
	// var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	if (confirm("Are you sure you want to delete this part of formula ?."))
	{
		var stringProductKeyJQueryID = stringKres + "SpanHeaderProduct";
		var stringProductKey = $(stringProductKeyJQueryID).attr("data-product-key");
		var stringFormulaKey = getGeneralTextForm("TextFormulaConfiguratorFormulaKey");
		var stringFormulaContent;

		/* PRODUCT FILTER */

		JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
		JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
		JSONFormula = JSONProductContent[stringJSONKeyFormula];

		/* FORMULA FILTER */

		for (var j = 0; j < JSONFormula.length; j++)
		{
			stringJSONFormulaKey = JSONFormula[j][stringJSONKeyFormulaKey];
			
			if (stringJSONFormulaKey == stringFormulaKey)
			{
				/* FORMULA INSERT / UPDATE */
				
				stringFormulaContent = JSONFormula[j][stringJSONKeyFormulaContent];
				// $(stringLayoutJQueryID).remove();
				$($(elementLayout).parent().parent()).remove();

				stringFormulaContent = getFormulaContentFromLayout("FormulaContent");
				
				JSONFormula[j][stringJSONKeyFormulaContent] = stringFormulaContent;
				formulaContentGenerator(JSONFormula[j][stringJSONKeyFormulaContent], stringFormulaJavaScriptID);
				
				j = JSONFormula.length;
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

function formulaContentDeleteTemporary(JSONFormula, elementLayout, stringFormulaJavaScriptID)
{
	var stringLayoutJavaScriptID = $(elementLayout).parent().parent().attr("id");
	// var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	if (confirm("Are you sure you want to delete this part of formula ?."))
	{
		stringFormulaContent = JSONFormula[stringJSONKeyFormulaContent];
		// $(stringLayoutJQueryID).remove();
		$($(elementLayout).parent().parent()).remove();

		stringFormulaContent = getFormulaContentFromLayout("FormulaContent");
		
		JSONFormula[stringJSONKeyFormulaContent] = stringFormulaContent;
		formulaTemporaryContentGenerator(JSONFormula[stringJSONKeyFormulaContent], stringFormulaJavaScriptID);
		previewJSONFormulaSingle(JSONFormula);
	}
	else
	{

	}
}

function formulaContentEdit(elementLayout)
{
	var elementFormulaContent = $(elementLayout).parent().parent();
}

function formulaVerificator(stringLayoutJavaScriptID)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var stringKeyJQueryClass = stringDot + "SpanHeaderDetail";
	
	var arrayFormulaContent = $(stringLayoutJQueryID + " " + stringKeyJQueryClass).map(function()
	{
    	return $(this).text();
	}).get();

	/* INPUT VERFIVICATION */

	var stringFormulaContent = arrayFormulaContent.join("");
	var booleanState = true;
	
	if (stringFormulaContent.indexOf(stringStateOperator + stringStateOperator + stringStateOperator) >= 0)
	{
		booleanState = false;
	}
	else if (stringFormulaContent.indexOf(stringStateInput + stringStateInput) >= 0)
	{
		booleanState = false;
	}
	else if (stringFormulaContent.indexOf(stringStateConstant + stringStateConstant) >= 0)
	{
		booleanState = false;
	}
	else
	{

	}

	if (booleanState == true)
	{
		$(stringLayoutJQueryID).css("background-color", "transparent");
	}
	else
	{
		$(stringLayoutJQueryID).css("background-color", "red");
	}
}


// FORM ACTION

function formulaTemporarySave(JSONFormula, stringURL)
{
	/* JSON INSERT */
		var stringFormulaKey = getGeneralTextForm("TextFormulaConfiguratorFormulaKey");
	var stringFormulaText = getGeneralTextForm("TextFormulaConfiguratorFormulaText");
	var stringFormulaContent = getFormulaContentFromLayout("FormulaContent");
	var stringFormulaInputKey = getGeneralSelectForm("SelectFormulaConfiguratorInputKey");
	var stringFormulaState = getGeneralSelectForm("SelectFormulaConfiguratorFormulaState");

	JSONFormula[stringJSONKeyFormulaKey] = stringFormulaKey;
	JSONFormula[stringJSONKeyFormulaText] = stringFormulaText;
	JSONFormula[stringJSONKeyFormulaContent] = stringFormulaContent;
	JSONFormula[stringJSONKeyInputKey] = stringFormulaInputKey;
	JSONFormula[stringJSONKeyFormulaState] = stringFormulaState;

	/* CHANGE PAGE */

	alert(stringURL + JSON.stringify(JSONFormula));
	changePage(stringURL + JSON.stringify(JSONFormula));
}

function formulaTemporaryCancel(JSONFormula, stringURL)
{
	/* CHANGE PAGE */
	console.log(JSONFormula);
	alert(stringURL + JSON.stringify(JSONFormula));
	changePage(stringURL + JSON.stringify(JSONFormula));
}

function formulaSave(JSONProduct, stringURL)
{
	/* INITIALIZATION */
	
	var stringProductKeyJQueryID = stringKres + "SpanHeaderProduct";
	var stringProductKey = $(stringProductKeyJQueryID).attr("data-product-key");
	var stringFormulaKey = getGeneralTextForm("TextFormulaConfiguratorFormulaKey");
	var stringFormulaText = getGeneralTextForm("TextFormulaConfiguratorFormulaText");
	var stringFormulaContent;
	var stringFormulaInputKey = getGeneralSelectForm("SelectFormulaConfiguratorInputKey");
	var stringFormulaState = getGeneralSelectForm("SelectFormulaConfiguratorFormulaState");
	
	var stringJSONProductKey;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONConstant;
	var stringJSONFormulaKey;
	var stringJSONFormulaText;
	var stringJSONFormulaState;

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
	JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
	
	stringJSONProductKey = JSONProductFiltered[stringJSONKeyProductKey];
	stringJSONProductState = JSONProductFiltered[stringJSONKeyProductState];

	/* FORMULA FILTER */

	JSONFormula = JSONProductContent[stringJSONKeyFormula];
	JSONFormulaFiltered = JSONFilter(JSONFormula, [stringJSONKeyFormulaKey], [stringFormulaKey], null);

	/* FORMULA INSERT / UPDATE */

	stringFormulaContent = getFormulaContentFromLayout("FormulaContent");

	if (JSONFormulaFiltered == null || JSONFormulaFiltered == undefined)
	{
		var arrayNewFormulaKey = [stringJSONKeyFormulaKey, stringJSONKeyFormulaText, stringJSONKeyFormulaContent, stringJSONKeyInputKey, stringJSONKeyFormulaState];
		var arrayNewFormulaValue = [stringFormulaKey, stringFormulaText, stringFormulaContent, stringFormulaInputKey, stringFormulaState];
		JSONCustomAdd(JSONFormula, arrayNewFormulaKey, arrayNewFormulaValue);
	}
	else
	{
		JSONFormulaFiltered[stringJSONKeyFormulaKey] = stringFormulaKey;
		JSONFormulaFiltered[stringJSONKeyFormulaText] = stringFormulaText;
		JSONFormulaFiltered[stringJSONKeyFormulaContent] = stringFormulaContent;
		JSONFormulaFiltered[stringJSONKeyInputKey] = stringFormulaInputKey;
		JSONFormulaFiltered[stringJSONKeyFormulaState] = stringFormulaState;
	}

	/* CHANGE PAGE */

	alert(stringURL + JSON.stringify(JSONFormula));
	// changePage(stringURL + JSON.stringify(JSONFormula));

	resetSpecific("MainContent", ["FormulaContent"]);
	curtainToggle("CurtainNoItemSelected", true);
	generateFormulaDirectory(JSONFormulaFromURL, "GeneratedFormula");
}


// GETTER

function getFormulaContentFromLayout(stringLayoutJavaScriptID)
{
	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;
	var stringKeyJQueryClass = stringDot + "SpanFormulaHeader";
	var arrayFormulaContent = $(stringLayoutJQueryID + " " + stringKeyJQueryClass).map(function()
	{
    	return $(this).text();
	}).get();

	return arrayFormulaContent.join(stringJSONArraySeparator);
}


// PREVIEW

function previewJSONFormula(JSONFormula)
{
	var stringJSONPreview = "";

	for (var i = 0; i < JSONFormula.length; i++)
	{
		stringJSONPreview += 
		"formulaKey : " + JSONFormula[i][stringJSONKeyFormulaKey] + 
		"\nformulaContent : " + JSONFormula[i][stringJSONKeyFormulaContent] + 
		"\ninputKey : " + JSONFormula[i][stringJSONKeyInputKey] + 
		"\nformulaState : " + JSONFormula[i][stringJSONKeyFormulaState];
	}

	alert(stringJSONPreview);
}

function previewJSONFormulaSingle(JSONFormula)
{
	var stringJSONPreview = 
		"formulaKey : " + JSONFormula[stringJSONKeyFormulaKey] + 
		"\nformulaContent : " + JSONFormula[stringJSONKeyFormulaContent] + 
		"\ninputKey : " + JSONFormula[stringJSONKeyInputKey] + 
		"\nformulaState : " + JSONFormula[stringJSONKeyFormulaState];

	alert(stringJSONPreview);
}