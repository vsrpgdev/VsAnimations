
declare class Scene_Message extends Scene_Base 
{
  protected _messageWindow: Window_Message;
  protected _scrollTextWindow: Window_ScrollText;
  protected _goldWindow: Window_Gold;
  protected _nameBoxWindow: Window_NameBox;
  protected _choiceListWindow: Window_ChoiceList;
  protected _numberInputWindow: Window_NumberInput;
  protected _eventItemWindow: Window_EventItem;

  constructor();

  initialize(): void;

  isMessageWindowClosing(): boolean;

  createAllWindows(): void;

  protected createMessageWindow(): void;
  protected messageWindowRect(): Rectangle;

  protected createScrollTextWindow(): void;
  protected scrollTextWindowRect(): Rectangle;

  protected createGoldWindow(): void;
  protected goldWindowRect(): Rectangle;

  protected createNameBoxWindow(): void;

  protected createChoiceListWindow(): void;

  protected createNumberInputWindow(): void;

  protected createEventItemWindow(): void;
  protected eventItemWindowRect(): Rectangle;

  protected associateWindows(): void;

  cancelMessageWait(): void;
}
