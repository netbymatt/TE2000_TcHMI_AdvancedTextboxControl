declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiRadioButton extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __textNode: Text | null;
                protected __radioGroup: string | null | undefined;
                protected __radioState: ToggleState | undefined;
                protected __stateSymbol: TcHmi.Symbol<boolean> | null | undefined;
                protected __radioStateIconColor: TcHmi.SolidColor | null | undefined;
                protected __text: string | null | undefined;
                protected __textPosition: TcHmiRadioButton.TextPosition | undefined;
                protected __textHorizontalAlignment: HorizontalAlignment | undefined;
                protected __textVerticalAlignment: VerticalAlignment | undefined;
                protected __textFontFamily: FontFamily | null | undefined;
                protected __textFontSize: number | null | undefined;
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                protected __textFontStyle: FontStyle | undefined;
                protected __textFontWeight: FontWeight | undefined;
                protected __textColor: SolidColor | null | undefined;
                /** Event destroy functions */
                protected __onPressedEventDestroyEvent: DestroyFunction | null;
                protected __onResizedEventDestroyEvent: DestroyFunction | null;
                protected __onRadioGroupToggledEventDestroyEvent: DestroyFunction | null;
                protected __destroyStateSymbolWatch: DestroyFunction | null;
                /** Helper */
                protected __state: boolean;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 * @function
                 */
                __previnit(): void;
                /**
                 * If raised, all attributes have been set to it's default or dom values.
                 * @function
                 */
                __init(): void;
                /**
                 * Is called by tachcontrol() after the control instance gets part of the current DOM.
                 * Is only allowed to be called from the framework itself!
                 * @function
                 */
                __attach(): void;
                /**
                 * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                 * Is only allowed to be called from the framework itself!
                 * @function
                 */
                __detach(): void;
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if system destroys control!
                 * @function
                 */
                destroy(): void;
                /**
                 * Is raised when the onPressed event is fired from the base control.
                 * @function
                 * @callback
                 */
                protected __onPressed: () => void;
                /**
                 * Is raised when the onResized event is fired from the base control.
                 * @function
                 * @callback
                 */
                protected __onResized: () => void;
                /**
                 * Is raised if a member of 'radioGroup' has raised the toggled event.
                 * @function
                 * @callback
                 */
                protected __onRadioGroupToggled: (evt: EventProvider.Event, data: {
                    activeElementId: string;
                    source: string;
                }) => void;
                /**
                 * Sets the radioGroup attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the radioGroup attribute.
                 */
                setRadioGroup(valueNew: string | null): void;
                /**
                 * Returns the current  value of the radioGroup attribute
                 * @function
                 */
                getRadioGroup(): string | null | undefined;
                /**
                 * Processes the current value of the radioGroup attribute.
                 * @function
                 */
                protected __processRadioGroup(): void;
                /**
                 * Sets the radioState attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the radioState attribute. Possible values: Normal, Active.
                 * @param {boolean} forwardStateSymbol Controls if a change should be forwarded to a possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param {boolean} process Allows to disable underlying calls to processRadioState. Required if a StateSymbol change is forwarded to the RadioState.
                 */
                protected __setRadioState(valueNew: ToggleState | null, forwardStateSymbol: boolean, process: boolean): void;
                /**
                 * Sets the radioState attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the radioState attribute. Possible values: Normal, Active.
                 */
                setRadioState(valueNew: ToggleState | null): void;
                /**
                 * Returns the current value of the radioState attribute
                 * @function
                 */
                getRadioState(): "Normal" | "Active" | undefined;
                /**
                 * Processes the current value of the radioState attribute.
                 * @function
                 */
                protected __processRadioState(forwardStateSymbol?: boolean): void;
                /**
                 * Sets the stateSymbol attribute to a new value.
                 * @function
                 * @param {TcHmi.Symbol} valueNew The new value for stateSymbol.
                 */
                setStateSymbol(valueNew: TcHmi.Symbol | null): void;
                /**
                 * The watch callback for the stateSymbol.
                 * @function
                 * @callback
                 * @param {IReadResultObject} data Object containing the new value of the stateSymbol.
                 */
                protected __onStateSymbolWatch: (data: Symbol.IReadResultObject<boolean>) => void;
                /**
                 * Returns the current value of the stateSymbol attribute.
                 * @function
                 */
                getStateSymbol(): Symbol<boolean> | null | undefined;
                /**
                 * Processes the current state if state has changed.
                 * @function
                 * @param {boolean} state The new state of the control.
                 * @param {boolean} forwardStateSymbol Controls if a change should be reflected to an possible existing state symbol. This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param {boolean} source What caused the change of state. Either user interaction, the change of an attribute or the state symbol.
                 */
                protected __processState(state: boolean, forwardStateSymbol: boolean, source: string): void;
                /**
                 * Sets the text color and calls the associated process function (processRadioStateIconColor).
                 * @function
                 * @param {string} valueNew The new value for radioStateIconColor.
                 */
                setRadioStateIconColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the radioStateIconColor object resolver.
                 * @function
                 * @callback
                 * @param {IWatchResultCallback} data Object containing the new value for radioStateIconColor
                 */
                protected __onResolverForRadioStateIconColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                 * Returns the current value of radioStateIconColor.
                 * @function
                 * @returns {string} The current value of radioStateIconColor.
                 */
                getRadioStateIconColor(): SolidColor | null | undefined;
                /**
                 * Processes the current radioStateIconColor attribute value.
                 * @function
                 */
                protected __processRadioStateIconColor(): void;
                /**
                 * Sets the text attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the text attribute.
                 */
                setText(valueNew: string | null): void;
                /**
                 * Returns the current  value of the text attribute
                 * @function
                 */
                getText(): string | null | undefined;
                /**
                 * Processes the current value of the text attribute.
                 * @function
                 */
                protected __processText(): void;
                /**
                 * Sets the textPosition attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textPosition attribute.
                 */
                setTextPosition(valueNew: TcHmiRadioButton.TextPosition | null): void;
                /**
                 * Returns the current  value of the textPosition attribute
                 * @function
                 */
                getTextPosition(): "Left" | "Right" | undefined;
                /**
                 * Processes the current value of the textPosition attribute.
                 * @function
                 */
                protected __processTextPosition(): void;
                /**
                 * Sets the textHorizontalAlignment attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textHorizontalAlignment attribute.
                 */
                setTextHorizontalAlignment(valueNew: HorizontalAlignment | null): void;
                /**
                 * Returns the current  value of the textHorizontalAlignment attribute
                 * @function
                 */
                getTextHorizontalAlignment(): "Left" | "Right" | "Center" | undefined;
                /**
                 * Processes the current value of the textHorizontalAlignment attribute.
                 * @function
                 */
                protected __processTextHorizontalAlignment(): void;
                /**
                 * Sets the textVerticalAlignment attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textVerticalAlignment attribute.
                 */
                setTextVerticalAlignment(valueNew: VerticalAlignment | null): void;
                /**
                 * Returns the current  value of the textVerticalAlignment attribute
                 * @function
                 */
                getTextVerticalAlignment(): "Center" | "Top" | "Bottom" | undefined;
                /**
                 * Processes the current value of the textVerticalAlignment attribute.
                 * @function
                 */
                protected __processTextVerticalAlignment(): void;
                /**
                 * Sets the textFontFamily attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontFamily attribute.
                 */
                setTextFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Returns the current  value of the textFontFamily attribute
                 * @function
                 */
                getTextFontFamily(): string | null | undefined;
                /**
                 * Processes the current value of the textFontFamily attribute.
                 * @function
                 */
                protected __processTextFontFamily(): void;
                /**
                 * Sets the textFontSize attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontSize attribute.
                 */
                setTextFontSize(valueNew: number | null): void;
                /**
                 * Returns the current  value of the textFontSize attribute
                 * @function
                 */
                getTextFontSize(): number | null | undefined;
                /**
                 * Processes the current value of the textFontSize attribute.
                 * @function
                 */
                protected __processTextFontSize(): void;
                /**
                 * Sets the textFontSizeUnit attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontSizeUnit attribute.
                 */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current  value of the textFontSizeUnit attribute
                 * @function
                 */
                getTextFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                /**
                 * Processes the current value of the textFontSizeUnit attribute.
                 * @function
                 */
                protected __processTextFontSizeUnit(): void;
                /**
                 * Sets the textFontStyle attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontStyle attribute.
                 */
                setTextFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current  value of the textFontStyle attribute
                 * @function
                 */
                getTextFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current value of the textFontStyle attribute.
                 * @function
                 */
                protected __processTextFontStyle(): void;
                /**
                 * Sets the textFontWeight attribute to a new value.
                 * @function
                 * @param {string} valueNew The new value for the textFontWeight attribute.
                 */
                setTextFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current  value of the textFontWeight attribute
                 * @function
                 */
                getTextFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current value of the textFontWeight attribute.
                 * @function
                 */
                protected __processTextFontWeight(): void;
                /**
                 * Sets the text color and calls the associated process function (processTextColor).
                 * @function
                 * @param {string} valueNew The new value for textColor.
                 */
                setTextColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the textColor object resolver.
                 * @function
                 * @callback
                 * @param {IWatchResultCallback} data Object containing the new value for textColor
                 */
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                 * Returns the current value of textColor.
                 * @function
                 * @returns {string} The current value of textColor.
                 */
                getTextColor(): SolidColor | null | undefined;
                /**
                 * Processes the current textColor attribute value.
                 * @function
                 */
                protected __processTextColor(): void;
            }
            module TcHmiRadioButton {
                type TextPosition = 'Left' | 'Right';
            }
        }
    }
}
