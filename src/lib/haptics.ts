const QUICK_VIBRATE_MS = 15;
const LONG_VIBRATE_MS = 150;
const IOS_TAP_GAP_MS = 80;
const IOS_LONG_TAP_COUNT = 3;

// Android (Chrome/Firefox): Vibration API, (iOS Safari does not have because why would it (￣︿￣).)
const canVibrate = typeof navigator !== "undefined" && "vibrate" in navigator;

// iOS Safari 17.4+ : haptic workaround: <input type="checkbox" switch>
const canIosSwitchTap =
  typeof HTMLInputElement !== "undefined" &&
  "switch" in HTMLInputElement.prototype;

let iosSwitchLabel: HTMLLabelElement | null = null;

function iosTap() {
  if (!iosSwitchLabel) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("switch", "");
    const label = document.createElement("label");
    label.setAttribute("aria-hidden", "true");
    label.style.cssText =
      "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden;";
    label.appendChild(input);
    document.body.appendChild(label);
    iosSwitchLabel = label;
  }
  iosSwitchLabel.click();
}

function vibrate(durationMs: number, iosTapCount: number) {
  if (canVibrate) {
    navigator.vibrate(durationMs);
    return;
  }
  if (!canIosSwitchTap) return;
  iosTap();
  for (let i = 1; i < iosTapCount; i++) {
    window.setTimeout(iosTap, i * IOS_TAP_GAP_MS);
  }
}

export const haptics = {
  quick: () => vibrate(QUICK_VIBRATE_MS, 1),
  long: () => vibrate(LONG_VIBRATE_MS, IOS_LONG_TAP_COUNT),
};
