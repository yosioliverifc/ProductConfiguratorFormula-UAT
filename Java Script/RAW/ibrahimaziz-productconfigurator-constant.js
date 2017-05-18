// IBRAHIM AZIZ 
// BHIMBIM
// http://www.ibrahimaziz.design
// built for InfoConnect Sdn Bhd - BCA Life | BCAL MPOS
// http://www.infoconnect.com.my


// INITIALIZATION

/* INPUT DEFAULT */

var arrayObjectCoveredPerson = [];
arrayObjectCoveredPerson.push({ value: "EntryAge", text: "EntryAge" });
arrayObjectCoveredPerson.push({ value: "PolAge", text: "PolAge" });
arrayObjectCoveredPerson.push({ value: "Smoker", text: "Smoker (N,S)" });
arrayObjectCoveredPerson.push({ value: "Gender", text: "Gender (M,F)" });

var arrayObjectBasicPlan = [];
arrayObjectBasicPlan.push({ value: "BSA", text: "BSA" });
arrayObjectBasicPlan.push({ value: "Term", text: "Term" });

var arrayObjectParameterType = [];
arrayObjectParameterType.push({ value: stringStateNotSelected, text: "Please Select" });
arrayObjectParameterType.push({ value: "FieldsetInput", text: "Input" });
arrayObjectParameterType.push({ value: "FieldsetOperator", text: "Operator" });
/* arrayObjectParameterType.push({ value: "FieldsetConstant", text: "Constant" });
arrayObjectParameterType.push({ value: "FieldsetCondition", text: "Condition" }); */

var arrayObjectStateKey = [];
arrayObjectStateKey.push({ value: stringStateNotSelected, text: "Please Select" });
arrayObjectStateKey.push({ value: "true", text: "Active" });
arrayObjectStateKey.push({ value: "false", text: "Not Active" });

var arrayObjectOperatorKey = [];
arrayObjectOperatorKey.push({ value: stringStateNotSelected, text: "Please Select" });
arrayObjectOperatorKey.push({ value: "+", text: "+" });
arrayObjectOperatorKey.push({ value: "-", text: "-" });
arrayObjectOperatorKey.push({ value: "*", text: "*" });
arrayObjectOperatorKey.push({ value: "/", text: "/" });
/* arrayObjectOperatorKey.push({ value: "(", text: "(" });
arrayObjectOperatorKey.push({ value: ")", text: ")" }); */

/* LAYOUT ID */

var stringCurtainJavaScriptID = "Curtain";
var stringNavigationDistance = "280px"
var stringNavigationLeftSlideOut = stringStrip + stringNavigationDistance;
var stringNavigationLeftSlideIn = "0px";
var stringMainLeftSlideOut = "0px";
var stringMainLeftSlideIn = stringNavigationDistance;

/* JSON KEY */

var stringJSONKeyProductKey = "productKey";
var stringJSONKeyProductText = "productText";
var stringJSONKeyProductContent = "productContent";
var stringJSONKeyProductState = "productState";

var stringJSONKeyFormula = "formula";
var stringJSONKeyFormulaKey = "formulaKey";
var stringJSONKeyFormulaText = "formulaText";
var stringJSONKeyFormulaContent = "formulaContent";
var stringJSONKeyFormulaState = "formulaState";

var stringJSONKeyConstant = "constant";
var stringJSONKeyConstantKey = "constantKey";
var stringJSONKeyConstantText = "constantText";
var stringJSONKeyTableKey = "tableKey";
var stringJSONKeyTableHeader = "tableHeader";
var stringJSONKeyConstantOperator = "constantOperator";
var stringJSONKeyConstantState = "constantState";

var stringJSONKeyTable = "table";
var stringJSONKeyTableKey = "tableKey";
var stringJSONKeyTableText = "tableText";
var stringJSONKeyTableContent = "tableContent";
var stringJSONKeyTableState = "tableState";
var stringJSONKeyAttribute = "attribute";
var stringJSONKeyTableHeaderKey = "tableHeaderKey";
var stringJSONKeyTableBodyKey = "tableBodyKey";
var stringJSONKeyTableFooterKey = "tableFooterKey";
var stringJSONKeyTableOrder = "tableOrder";
var stringJSONKeyRow = "row";
var stringJSONKeyRowKey = "rowKey";
var stringJSONKeyRowOrder = "rowOrder";
var stringJSONKeyRowState = "rowState";
var stringJSONKeyColumn = "column";
var stringJSONKeyColumnKey = "columnKey";
var stringJSONKeyRowSpan = "rowSpan";
var stringJSONKeyColumnSpan = "columnSpan";
var stringJSONKeyColumnValue = "columnValue";
var stringJSONKeyColumnOrder = "columnOrder";
var stringJSONKeyColumnState = "columnState";

var stringJSONKeySection = "section";
var stringJSONKeySectionKey = "sectionKey";
var stringJSONKeySectionText = "sectionText";
var stringJSONKeySectionContent = "sectionContent";
var stringJSONKeySectionState = "sectionState";

var stringJSONKeyFieldset = "fieldset";
var stringJSONKeyFieldsetKey = "fieldsetKey";
var stringJSONKeyFieldsetLegend = "fieldsetLegend";
var stringJSONKeyFieldsetContent = "fieldsetContent";
var stringJSONKeyFieldsetOrder = "fieldsetOrder";
var stringJSONKeyFieldsetState = "fieldsetState";

var stringJSONKeyQuestion = "question";
var stringJSONKeyQuestionKey = "questionKey";
var stringJSONKeyQuestionOrder = "questionOrder";
var stringJSONKeyQuestionState = "questionState";

var stringJSONKeyInput = "input";
var stringJSONKeyLabelKey = "input";
var stringJSONKeyLabelWidth = "input";
var stringJSONKeyLabelValue = "input";
var stringJSONKeyInputKey = "inputKey";
var stringJSONKeyInputName = "input";
var stringJSONKeyInputType = "input";
var stringJSONKeyInputWidth = "input";
var stringJSONKeyInputPlaceholder = "input";
var stringJSONKeyInputValue = "input";
var stringJSONKeyInputState = "input";
var stringJSONKeyInputValidationType = "input";
var stringJSONKeyInputValidationName = "input";
var stringJSONKeyInputOrder = "input";