"use strict";
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 15413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DndContext": () => (/* reexport */ DndContext/* DndContext */.L),
  "DndProvider": () => (/* reexport */ DndProvider/* DndProvider */.W),
  "DragPreviewImage": () => (/* reexport */ DragPreviewImage),
  "useDrag": () => (/* reexport */ useDrag/* useDrag */.c),
  "useDragDropManager": () => (/* reexport */ useDragDropManager/* useDragDropManager */.N),
  "useDragLayer": () => (/* reexport */ useDragLayer),
  "useDrop": () => (/* reexport */ useDrop/* useDrop */.L)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndContext.js
var DndContext = __webpack_require__(82667);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/core/DndProvider.js + 34 modules
var DndProvider = __webpack_require__(28493);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/core/DragPreviewImage.js

/**
 * A utility for rendering a drag preview image
 */ const DragPreviewImage = (0,react.memo)(function DragPreviewImage({ connect , src  }) {
    (0,react.useEffect)(()=>{
        if (typeof Image === 'undefined') return;
        let connected = false;
        const img = new Image();
        img.src = src;
        img.onload = ()=>{
            connect(img);
            connected = true;
        };
        return ()=>{
            if (connected) {
                connect(null);
            }
        };
    });
    return null;
});

//# sourceMappingURL=DragPreviewImage.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/core/index.js




//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/useDrag.js + 9 modules
var useDrag = __webpack_require__(49294);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrag/index.js


//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(5109);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useCollector.js
var useCollector = __webpack_require__(85685);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDragLayer.js



/**
 * useDragLayer Hook
 * @param collector The property collector
 */ function useDragLayer(collect) {
    const dragDropManager = (0,useDragDropManager/* useDragDropManager */.N)();
    const monitor = dragDropManager.getMonitor();
    const [collected, updateCollected] = (0,useCollector/* useCollector */.r)(monitor, collect);
    (0,react.useEffect)(()=>monitor.subscribeToOffsetChange(updateCollected)
    );
    (0,react.useEffect)(()=>monitor.subscribeToStateChange(updateCollected)
    );
    return collected;
}

//# sourceMappingURL=useDragLayer.js.map
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js + 9 modules
var useDrop = __webpack_require__(99272);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/useDrop/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/hooks/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/index.js




//# sourceMappingURL=index.js.map

/***/ })

};
;