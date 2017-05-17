// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life | BCAL MPOS
// http://www.infoconnect.com.my


// GENERATOR

function generateTableDirectory(JSONConfig, stringLayoutJavaScriptID)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	$(stringLayoutJQueryID).empty();
	
	var stringJSONProductKey;
	var stringJSONProductText;
	var JSONProductContent = [];
	var stringJSONProductState;

	var stringJSONTableKey;
	var stringJSONTableText;
	var JSONTable = [];
	var stringJSONTableState;

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
			JSONTable = JSONProductContent.table;
			
			if (JSONTable.length != 0)
			{
				/* SECTION FILTER */

				for (var j = 0; j < JSONTable.length; j++)
				{
					if (j == 0)
					{
						stringHTML += "<br><ul class='DirectorySection'>";
					}
					else
					{

					}

					/* PRINT LIST */

					stringJSONTableKey = JSONTable[j].tableKey;
					stringHTML += "<li class='ListSection'>" + JSONTable[j].tableText;
					stringHTML += "<input type=\"button\" class=\"ButtonDeleteSecondary ButtonIcon\" onclick=\"generateLayoutTable('LayoutContainer', JSONLayoutFromURL, JSONFormulaFromURL, '" + stringJSONProductKey + "', '" + stringJSONTableKey + "')\">";
					stringHTML += "<input type=\"button\" class=\"ButtonEditSecondary ButtonIcon\" onclick=\"generateLayoutTable('LayoutContainer', JSONLayoutFromURL, JSONFormulaFromURL, '" + stringJSONProductKey + "', '" + stringJSONTableKey + "')\">";
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

function generateLayoutTable(stringLayoutJavaScriptID, JSONLayout, JSONProduct, stringProductKey, stringTableKey)
{
	/* INITIALIZATION */

	var stringLayoutJQueryID = stringKres + stringLayoutJavaScriptID;

	var stringJSONProductKey;
	var stringJSONProductText;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONTable;
	var stringJSONTableKey;
	var stringJSONTableState;
	var stringJSONTableText;
	var JSONTableFiltered;

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
	JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];

	stringJSONProductText = JSONProductFiltered[stringJSONKeyProductText];
	stringJSONProductKey = JSONProductFiltered[stringJSONKeyProductKey];
	stringJSONProductState = JSONProductFiltered[stringJSONKeyProductState];
	
	/* CONSTANT FILTER */

	JSONTable = JSONProductContent[stringJSONKeyTable];
	JSONTableFiltered = JSONFilter(JSONTable, [stringJSONKeyTableKey], [stringTableKey], null);

	stringJSONTableKey = JSONTableFiltered[stringJSONKeyTableKey];
	stringJSONTableState = JSONTableFiltered[stringJSONKeyTableState];
	stringJSONTableText = JSONTableFiltered[stringJSONKeyTableText];

	/* UPDATE FORM */

	$("#SpanHeaderProduct").text(stringJSONProductText);
	$("#SpanHeaderTable").text(stringJSONTableText);
	$("#TitleHeaderTable").text(stringJSONTableText);

	setGeneralTextForm("TextTableConfiguratorTableKey", stringJSONTableKey);
	setGeneralTextForm("TextTableConfiguratorTableText", stringJSONTableText);
	setGeneralSelectForm("SelectTableConfiguratorTableState", stringJSONTableState);
}


/* ACTION */

function tableSave(JSONProduct, stringURL)
{
	/* INITIALIZATION */
	
	var stringProductKeyJQueryID = stringKres + "SpanHeaderProduct";
	var stringProductKey = $(stringProductKeyJQueryID).text().toLowerCase();
	var stringTableKey = getGeneralTextForm("TextTableConfiguratorTableKey");
	var stringTableText = getGeneralTextForm("TextTableConfiguratorTableText");
	var stringTableState = getGeneralSelectForm("SelectTableConfiguratorTableState");

	var stringJSONProductKey;
	var stringJSONProductState;
	var JSONProductContent;

	var JSONTable;
	var stringJSONTableKey;
	var stringJSONTableText;
	var stringJSONTableState;
	var JSONTableFiltered;

	/* PRODUCT FILTER */

	JSONProductFiltered = JSONFilter(JSONProduct, [stringJSONKeyProductKey], [stringProductKey], null);
	JSONProductContent = JSONProductFiltered[stringJSONKeyProductContent];

	stringJSONProductText = JSONProductContent[stringJSONKeyProductText];
	stringJSONProductKey = JSONProductFiltered[stringJSONKeyProductKey];
	stringJSONProductState = JSONProductFiltered[stringJSONKeyProductState];
	
	/* CONSTANT FILTER */

	JSONTable = JSONProductContent[stringJSONKeyTable];
	JSONTableFiltered = JSONFilter(JSONTable, [stringJSONKeyTableKey], [stringTableKey], null);

	stringJSONTableKey = JSONTableFiltered[stringJSONKeyTableKey];
	stringJSONTableState = JSONTableFiltered[stringJSONKeyTableState];
	stringJSONTableText = JSONTableFiltered[stringJSONKeyTableText];

	/* CONSTANT INSERT / UPDATE */

	JSONTableFiltered[stringJSONKeyTableKey] = stringTableKey;
	JSONTableFiltered[stringJSONKeyTableText] = stringTableText;
	JSONTableFiltered[stringJSONKeyTableState] = stringTableState;
	
	/* CHANGE PAGE */

	alert(stringURL + JSON.stringify(JSONTable));
	changePage(stringURL + JSON.stringify(JSONProduct));
}