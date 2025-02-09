declare namespace RPG {
  interface DataCommonEvent {
      /** Die eindeutige ID des Common Events. */
      id: number;

      /** Der Name des Common Events. */
      name: string;

      /** Die Liste der Befehle, die in diesem Common Event ausgeführt werden. */
      list: Array<{
          /** Der Code des Befehls. */
          code: number;

          /** Die Einrückungsebene des Befehls. */
          indent: number;

          /** Die Parameter des Befehls. */
          parameters: any[];
      }>;

      /** Die ID des Schalters, der das Common Event auslöst. */
      switchId: number;

      /** Der Trigger-Typ für das Common Event (0 = none, 1 = autorun, 2 = parallel). */
      trigger: number;
  }
}
