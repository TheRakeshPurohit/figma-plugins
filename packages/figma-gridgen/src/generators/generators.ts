import * as Utils from "../utils/utils";
import * as Interfaces from "../interfaces_and_constants/interfaces";
import * as Constants from "../interfaces_and_constants/constants";

/* Check if Font is Loaded */
let isTableFontLoaded: boolean = false;
let isHeaderFontLoaded: boolean = false;

export function generateBorders(
  borderType: Constants.BorderType,
  visible: boolean = true,
  borderCount: number,
  borderSpacing: number,
  borderWidthMultiplier: number,
  borderWidthIndividual: number,
  header: boolean,
  headerHeight: number,
  borderColor: string,
  referenceCoordinates: Interfaces.ReferenceCoordinates,
): GroupNode {
  const linesNode: SceneNode[] = [];
  let borderWidth: number;
  if (header) {
    if (borderType === Constants.BorderType.VERTICAL) {
      borderWidth = (borderWidthMultiplier - 1) * borderWidthIndividual + headerHeight;
    } else {
      borderCount -= 1;
      borderWidth = borderWidthMultiplier * borderWidthIndividual;
    }
  } else {
    borderWidth = borderWidthMultiplier * borderWidthIndividual;
  }
  const lineStrokesColor =
    borderColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i) === null
      ? Utils.hexToRgb(Constants.defaultBorderColor)
      : Utils.hexToRgb(borderColor);
  for (let i = 0; i < borderCount + 1; i++) {
    const line = figma.createLine();
    const lineStrokes = Utils.clone(line.strokes);
    lineStrokes[0].color.r = lineStrokesColor.r / Constants.maxRGB;
    lineStrokes[0].color.g = lineStrokesColor.g / Constants.maxRGB;
    lineStrokes[0].color.b = lineStrokesColor.b / Constants.maxRGB;
    line.strokes = lineStrokes;
    if (borderType === Constants.BorderType.VERTICAL) {
      line.rotation = Constants.Rotation.QUARTER;
      line.x = referenceCoordinates.x + i * borderSpacing;
      line.y = referenceCoordinates.y;
    } else {
      line.x = referenceCoordinates.x;
      line.y = referenceCoordinates.y - i * borderSpacing;
    }
    line.resize(borderWidth, 0);
    linesNode.push(line);
  }
  // create top line if header is included
  if (header && borderType === Constants.BorderType.HORIZONTAL) {
    const line = figma.createLine();
    const lineStrokes = Utils.clone(line.strokes);
    lineStrokes[0].color.r = lineStrokesColor.r / Constants.maxRGB;
    lineStrokes[0].color.g = lineStrokesColor.g / Constants.maxRGB;
    lineStrokes[0].color.b = lineStrokesColor.b / Constants.maxRGB;
    line.strokes = lineStrokes;
    line.resize(borderWidth, 0);
    line.x = referenceCoordinates.x;
    line.y = referenceCoordinates.y - headerHeight - borderCount * borderSpacing;
    linesNode.push(line);
  }
  const linesGroup: GroupNode = Utils.groupNodes(linesNode, Utils.getCurrentPage());
  if (!visible) {
    linesGroup.visible = false;
  }
  linesGroup.name = borderType;
  return linesGroup;
}

export function generateRowBackground(
  rowBackgroundType: Constants.RowBackgroundType,
  rowCount: number,
  rowHeight: number,
  rowWidth: number,
  alternateBackgrounds: boolean,
  header: boolean,
  primaryBackgroundColor: string,
  stripedBackgroundColor: string,
  referenceCoordinates: Interfaces.ReferenceCoordinates,
): GroupNode {
  const rowBackgroundNode: SceneNode[] = [];
  const rowSpacing = rowHeight * 2;
  let computedRowCount = 0;
  let startingPoint = 0;
  if (header) {
    rowCount -= 1;
  }
  if (rowBackgroundType === Constants.RowBackgroundType.ODD) {
    computedRowCount = Math.round(rowCount / 2);
    startingPoint = referenceCoordinates.y - rowHeight;
  } else {
    computedRowCount = Math.floor(rowCount / 2);
    startingPoint = referenceCoordinates.y - rowSpacing;
  }
  for (let i = 0; i < computedRowCount; i++) {
    const background = figma.createRectangle();
    const backgroundFills = Utils.clone(background.fills);
    let backgroundFillsColor: RGB;
    if (alternateBackgrounds) {
      if (
        (rowCount % 2 === 0 && rowBackgroundType === Constants.RowBackgroundType.ODD) ||
        (rowCount % 2 !== 0 && rowBackgroundType === Constants.RowBackgroundType.EVEN)
      ) {
        backgroundFillsColor = Utils.hexToRgb(stripedBackgroundColor);
      } else {
        backgroundFillsColor = Utils.hexToRgb(primaryBackgroundColor);
      }
    } else {
      backgroundFillsColor = Utils.hexToRgb(primaryBackgroundColor);
    }
    backgroundFills[0].color.r = backgroundFillsColor.r / Constants.maxRGB;
    backgroundFills[0].color.g = backgroundFillsColor.g / Constants.maxRGB;
    backgroundFills[0].color.b = backgroundFillsColor.b / Constants.maxRGB;
    background.fills = backgroundFills;
    background.resize(rowWidth, rowHeight);
    background.y = startingPoint - i * rowSpacing;
    rowBackgroundNode.push(background);
  }
  const rowBackgroundGroup: GroupNode = Utils.groupNodes(rowBackgroundNode, Utils.getCurrentPage());
  rowBackgroundGroup.name = rowBackgroundType;
  return rowBackgroundGroup;
}

export function generateTableTexts(
  rowCount: number,
  rowHeight: number,
  columnCount: number,
  columnWidth: number,
  tableFontFamily: string,
  tableFontStyle: string,
  tableFontSize: number,
  header: boolean,
  referenceCoordinates: Interfaces.ReferenceCoordinates,
) {
  const tableTextsNode: SceneNode[] = [];
  const tableFontName: FontName = {
    family: tableFontFamily,
    style: tableFontStyle,
  };
  if (header) {
    rowCount -= 1;
  }
  const textMargin: Interfaces.ReferenceCoordinates = { x: 5, y: 5 };
  for (let i = 0; i < columnCount; i++) {
    const columnTextsNode: SceneNode[] = [];
    const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + textMargin.x;
    for (let j = 0; j < rowCount; j++) {
      const text = figma.createText();
      text.name = "Row " + (rowCount - j);
      text.x = columnTextsStartingPosition;
      text.y = referenceCoordinates.y + textMargin.y - (j + 1) * rowHeight;
      columnTextsNode.push(text);
    }
    const columnTextsGroup = Utils.groupNodes(columnTextsNode, Utils.getCurrentPage());
    columnTextsGroup.name = "Column " + (i + 1);
    tableTextsNode.push(columnTextsGroup);
  }
  const tableTextsGroup: GroupNode = Utils.groupNodes(tableTextsNode, Utils.getCurrentPage());
  const allTextsNodesGenerated: SceneNode[] = tableTextsGroup.findAll(node => node.type === "TEXT");
  loadNodeFont(tableFontName).then(() => {
    for (let textNode of allTextsNodesGenerated) {
      const text = textNode as TextNode;
      text.fontName = tableFontName;
      text.fontSize = tableFontSize;
      text.characters = Constants.sampleText;
      text.textAlignVertical = Constants.TextVerticalAlignment.CENTER;
      text.resize(columnWidth - 1 - 2 * textMargin.x, rowHeight - 2 * textMargin.y);
      isTableFontLoaded = true;
      areFontsLoaded();
    }
  });
  tableTextsGroup.name = "Table Texts";
  return tableTextsGroup;
}

export function generateTableHeader(
  rowCount: number,
  rowHeight: number,
  columnCount: number,
  columnWidth: number,
  header: boolean,
  headerHeight: number,
  headerFontFamily: string,
  headerFontStyle: string,
  headerFontSize: number,
  floatingFilter: boolean,
  floatingFilterHeight: number,
  primaryBackgroundColor: string,
  referenceCoordinates: Interfaces.ReferenceCoordinates,
): GroupNode {
  if (header) {
    // Background
    const tableHeaderNode: SceneNode[] = [];
    const tableHeaderFontName: FontName = { family: headerFontFamily, style: headerFontStyle };
    const rowWidth = columnWidth * columnCount;
    const background = figma.createRectangle();
    const backgroundFills = Utils.clone(background.fills);
    const backgroundFillsColor: RGB = Utils.hexToRgb(primaryBackgroundColor);
    backgroundFills[0].color.r = backgroundFillsColor.r / Constants.maxRGB;
    backgroundFills[0].color.g = backgroundFillsColor.g / Constants.maxRGB;
    backgroundFills[0].color.b = backgroundFillsColor.b / Constants.maxRGB;
    background.fills = backgroundFills;
    background.resize(rowWidth, headerHeight);
    background.y = referenceCoordinates.y - headerHeight - (rowCount - 1) * rowHeight;
    background.name = "Header Background";
    tableHeaderNode.push(background);
    // Texts
    const tableHeaderTextsNode: SceneNode[] = [];
    const textHeight: number = floatingFilter ? headerHeight - floatingFilterHeight : headerHeight;
    const headerTextMargin: Interfaces.ReferenceCoordinates = { x: 5, y: 5 };
    for (let i = 0; i < columnCount; i++) {
      const columnTextsStartingPosition = referenceCoordinates.x + i * columnWidth + headerTextMargin.x;
      const text = figma.createText();
      text.name = "Column Header " + (i + 1);
      text.x = columnTextsStartingPosition;
      text.y = referenceCoordinates.y - headerHeight + headerTextMargin.y - (rowCount - 1) * rowHeight;
      tableHeaderTextsNode.push(text);
    }
    const tableHeaderTextsGroup = Utils.groupNodes(tableHeaderTextsNode, Utils.getCurrentPage());
    const allTextsNodesGenerated: SceneNode[] = tableHeaderTextsGroup.findAll(node => node.type === "TEXT");
    loadNodeFont(tableHeaderFontName).then(() => {
      for (let textNode of allTextsNodesGenerated) {
        const text = textNode as TextNode;
        text.fontName = tableHeaderFontName;
        text.fontSize = headerFontSize;
        text.characters = Constants.sampleText.toUpperCase();
        text.textAlignVertical = Constants.TextVerticalAlignment.CENTER;
        text.resize(columnWidth - 1 - 2 * headerTextMargin.x, textHeight - 2 * headerTextMargin.y);
        isHeaderFontLoaded = true;
        areFontsLoaded();
      }
    });
    tableHeaderTextsGroup.name = "Column Headers";
    tableHeaderNode.push(tableHeaderTextsGroup);
    // Floating Filters
    if (floatingFilter) {
      const floatingFiltersNode: SceneNode[] = [];
      const floatingFilterMargin: Interfaces.ReferenceCoordinates = { x: 5, y: 5 };
      for (let i = 0; i < columnCount; i++) {
        const columnFloatingFiltersStartingPosition = referenceCoordinates.x + i * columnWidth + floatingFilterMargin.x;
        const floatingFilter = figma.createRectangle();
        const floatingFilterFills = Utils.clone(floatingFilter.fills);
        const floatingFilterFillsColor: RGB = Utils.hexToRgb(Constants.ColorNameToHex.WHITE);
        floatingFilterFills[0].color.r = floatingFilterFillsColor.r / Constants.maxRGB;
        floatingFilterFills[0].color.g = floatingFilterFillsColor.g / Constants.maxRGB;
        floatingFilterFills[0].color.b = floatingFilterFillsColor.b / Constants.maxRGB;
        floatingFilter.fills = floatingFilterFills;
        floatingFilter.name = "Floating Filter Placeholder" + (i + 1);
        floatingFilter.resize(
          columnWidth - 1 - 2 * floatingFilterMargin.x,
          floatingFilterHeight - 2 * floatingFilterMargin.y,
        );
        floatingFilter.x = columnFloatingFiltersStartingPosition;
        floatingFilter.y =
          referenceCoordinates.y - floatingFilterHeight + floatingFilterMargin.y - (rowCount - 1) * rowHeight;
        floatingFiltersNode.push(floatingFilter);
      }
      const tableFloatingFiltersGroup = Utils.groupNodes(floatingFiltersNode, Utils.getCurrentPage());
      tableFloatingFiltersGroup.name = "Floating Filters";
      tableHeaderNode.push(tableFloatingFiltersGroup);
    }
    const tableHeaderGroup: GroupNode = Utils.groupNodes(tableHeaderNode, Utils.getCurrentPage());
    tableHeaderGroup.name = "Table Header";
    return tableHeaderGroup;
  } else {
    return null;
  }
}

// Function to load selected font
async function loadNodeFont(fontName: FontName): Promise<void> {
  await figma.loadFontAsync(fontName);
}

// Function to list all available fonts on Figma
export async function listAvailableFontsAsync(): Promise<Font[]> {
  return await figma.listAvailableFontsAsync();
}

// Getter function for font load status
function areFontsLoaded(): void {
  if (isTableFontLoaded && isHeaderFontLoaded) {
    /* Notify Success to User */
    figma.notify("👍 GridGen successfully generated your table", { timeout: 5 });
    figma.closePlugin();
  }
}
