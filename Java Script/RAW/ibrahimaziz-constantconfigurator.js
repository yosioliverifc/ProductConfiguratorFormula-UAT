// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life | BCAL MPOS
// http://www.infoconnect.com.my


// GENERATOR

function generateConstantDirectory(JSONConfig, stringLayoutJavaScriptID)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	$(stringLayoutJQueryID).empty();
	
	var stringJSONProductKey;
	var stringJSONProductText;
	var JSONProductContent = [];
	var stringJSONProductState;

	var stringJSONConstantKey;
	var stringJSONConstantText;
	var JSONConstant = [];
	var stringJSONConstantState;

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
			stringHTML += "<input type='button' class='ButtonAddSecondary ButtonIcon'>";
			JSONProductContent = JSONConfig[i].productContent;
			JSONConstant = JSONProductContent.constant;
			
			if (JSONConstant.length != 0)
			{
				/* SECTION FILTER */

				for (var j = 0; j < JSONConstant.length; j++)
				{
					if (j == 0)
					{
						stringHTML += "<br><ul class='DirectorySection'>";
					}
					else
					{

					}

					/* PRINT LIST */

					stringJSONConstantKey = JSONConstant[j].constantKey;
					stringHTML += "<li class='ListSection'>" + JSONConstant[j].constantText;
					stringHTML += "<input type=\"button\" class=\"ButtonDeleteSecondary ButtonIcon\" onclick=\"generateLayoutConstant('LayoutContainer', JSONLayoutFromURL, JSONFormulaFromURL, '" + stringJSONProductKey + "', '" + stringJSONConstantKey + "')\">";
					stringHTML += "<input type=\"button\" class=\"ButtonEditSecondary ButtonIcon\" onclick=\"generateLayoutConstant('LayoutContainer', JSONLayoutFromURL, JSONFormulaFromURL, '" + stringJSONProductKey + "', '" + stringJSONConstantKey + "')\">";
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

// CONSTANT

function addConstantForm(JSONLayout, arrayInputSection, arrayInputKey, stringProductKey)
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

function setConstantForm(stringLayoutJavaScriptID, JSONLayout, JSONProduct, stringProductKey, stringConstantKey)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	var stringJSONProductKey;
	var stringJSONProductText;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONConstant;
	var stringJSONConstantKey;
	var stringJSONConstantState;
	var stringJSONConstantText;
	var stringJSONConstantTableKey;
	var stringJSONConstantTableHeader;
	var stringJSONConstantOperator;
	var JSONConstantFiltered;

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
	JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
	stringJSONProductText = JSONProductFiltered[stringJSONKeyProductText];
	
	/* CONSTANT FILTER */

	JSONConstant = JSONProductContent[stringJSONKeyConstant];
	JSONConstantFiltered = JSONFilter(JSONConstant, [stringJSONKeyConstantKey], [stringConstantKey], null);

	/* UPDATE JSON */

	stringJSONConstantKey = JSONConstantFiltered[stringJSONKeyConstantKey];
	stringJSONConstantText = JSONConstantFiltered[stringJSONKeyConstantText];
	stringJSONConstantTableHeader = JSONConstantFiltered[stringJSONKeyTableHeader];
	stringJSONConstantTableKey = JSONConstantFiltered[stringJSONKeyTableKey];
	stringJSONConstantState = JSONConstantFiltered[stringJSONKeyConstantState];

	/* UPDATE FORM */
	
	$("#SpanHeaderProduct").text(stringJSONProductText);
	$("#SpanHeaderConstant").text(stringJSONConstantText);
	$("#TitleHeaderConstant").text(stringJSONConstantText);

	setGeneralTextForm("TextConstantConfiguratorConstantKey", stringJSONConstantKey);
	setGeneralTextForm("TextConstantConfiguratorConstantText", stringJSONConstantText);
	setGeneralSelectForm("SelectConstantConfiguratorConstantState", stringJSONConstantState);
}


/* ACTION */

function constantSave(JSONProduct, stringURL)
{
	/* INITIALIZATION */
	
	var stringProductKeyJQueryID = stringKres + "SpanHeaderProduct";
	var stringProductKey = $(stringProductKeyJQueryID).text().toLowerCase();
	var stringConstantKey = getGeneralTextForm("TextConstantConfiguratorConstantKey");
	var stringConstantText = getGeneralTextForm("TextConstantConfiguratorConstantText");
	var stringConstantState = getGeneralSelectForm("SelectConstantConfiguratorConstantState");

	var stringJSONProductKey;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONConstant;
	var stringJSONConstantKey;
	var stringJSONConstantText;
	var stringJSONConstantState;
	var JSONConstantFiltered

	/* PRODUCT FILTER */
	
	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
	JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];
	stringJSONProductText = JSONProductContent[stringJSONKeyProductText];
	
	/* CONSTANT FILTER */

	JSONConstant = JSONProductContent[stringJSONKeyConstant];
	JSONConstantFiltered = JSONFilter(JSONConstant, [stringJSONKeyConstantKey], [stringConstantKey], null);

	/* CONSTANT INSERT / UPDATE */

	JSONConstantFiltered[stringJSONKeyConstantKey] = stringConstantKey;
	JSONConstantFiltered[stringJSONKeyConstantText] = stringConstantText;
	JSONConstantFiltered[stringJSONKeyConstantState] = stringConstantState;
	
	/* CHANGE PAGE */

	alert(stringURL + JSON.stringify(JSONConstant));
	changePage(stringURL + JSON.stringify(JSONProduct));
}