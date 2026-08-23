
if (typeof gdjs.evtsExt__AutoTile__DeleteTile !== "undefined") {
  gdjs.evtsExt__AutoTile__DeleteTile.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AutoTile__DeleteTile = {};
gdjs.evtsExt__AutoTile__DeleteTile.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1= [];
gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects2= [];
gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1= [];
gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects2= [];
gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1= [];
gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects2= [];


gdjs.evtsExt__AutoTile__DeleteTile.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595DeleteTile_9546GDDetectorObjectObjects1Objects = Hashtable.newFrom({"DetectorObject": gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1});
gdjs.evtsExt__AutoTile__DeleteTile.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("CursorObject"), gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("DetectorObject"), gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Tile"), gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__AutoTile__DeleteTile.mapOfGDgdjs_9546evtsExt_9595_9595AutoTile_9595_9595DeleteTile_9546GDDetectorObjectObjects1Objects, (gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1.length !== 0 ? gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1[0] : null), eventsFunctionContext);
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1[i].getVariables().get("__AutoTileExtension").getChild("UpdateAllTiles"), true);
}
}
}

}


};

gdjs.evtsExt__AutoTile__DeleteTile.func = function(runtimeScene, Tile, DetectorObject, CursorObject, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Tile": Tile
, "DetectorObject": DetectorObject
, "CursorObject": CursorObject
},
  _objectArraysMap: {
"Tile": gdjs.objectsListsToArray(Tile)
, "DetectorObject": gdjs.objectsListsToArray(DetectorObject)
, "CursorObject": gdjs.objectsListsToArray(CursorObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTile"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTile"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects2.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects2.length = 0;

gdjs.evtsExt__AutoTile__DeleteTile.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects1.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDTileObjects2.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDDetectorObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__DeleteTile.GDCursorObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__AutoTile__DeleteTile.registeredGdjsCallbacks = [];