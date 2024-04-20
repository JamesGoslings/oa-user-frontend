"use strict";
function formattedTime() {
  const date = /* @__PURE__ */ new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
exports.formattedTime = formattedTime;
