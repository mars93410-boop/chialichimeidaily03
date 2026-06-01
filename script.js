let schedules = [
  {
    date: "2026-05-31",
    label: "5/31",
    areas: [
      { letter: "B", type: "ward", specialist: "張婷亭", doctors: ["余宗興", "林思維", "曾建仁"] },
      { letter: "C", type: "ward", specialist: "鄭鈺芬", doctors: ["韓龍疇", "陳春丞", "鄭鴻翔"] },
      { letter: "D", type: "ward", specialist: "郭子綺", doctors: ["陳經國", "田宇峯", "陳俊良"] },
      { letter: "E", type: "ward", specialist: "黃嘉綺", doctors: ["王哲川", "王覲文", "王柏竣"] },
      { letter: "F", type: "ward", specialist: "沈宛君", doctors: ["沈坤宏", "蕭景星", "胡恭寧", "廖仁傑"] },
      { letter: "G", type: "ward", specialist: "吳貞慧", doctors: ["關哲彥", "于錫倩", "洪順興"] },
      { letter: "H", type: "support", specialist: "吳孟桂", doctors: ["腎內", "神內", "腸胃科"] },
      { letter: "I", type: "support", specialist: "許雯萍", doctors: ["心內", "胸內"] },
    ],
    duties: [
      { kind: "evening", badge: "E", title: "沈宛君", note: "" },
      { kind: "oncall", badge: "值", title: "陳春丞", note: "26/5/31" },
      { kind: "next", badge: "N", title: "陳姿尹", note: "6/1" },
    ],
    leaves: [],
  },
  {
    date: "2026-06-01",
    label: "6/1",
    areas: [
      { letter: "B", type: "ward", specialist: "黃嘉綺", doctors: ["余宗興", "林思維", "曾建仁"] },
      { letter: "C", type: "clinic", specialist: "張婷亭", doctors: ["韓龍疇", "陳春丞", "鄭鴻翔"] },
      { letter: "D", type: "ward", specialist: "鄭鈺芬", doctors: ["陳經國", "田宇峯", "陳俊良"] },
      { letter: "E", type: "ward", specialist: "郭子綺", doctors: ["王哲川", "王覲文", "王柏竣"] },
      { letter: "F", type: "ward", specialist: "沈宛君", doctors: ["沈坤宏", "蕭景星", "胡恭寧"] },
      { letter: "G", type: "support", specialist: "吳貞慧", doctors: ["關哲彥", "洪順興"] },
      { letter: "H", type: "support", specialist: "吳孟桂", doctors: ["腎內", "神內"] },
      { letter: "I", type: "clinic", specialist: "許雯萍", doctors: ["心內", "胸內"] },
    ],
    duties: [
      { kind: "evening", badge: "E", title: "黃嘉綺", note: "" },
      { kind: "oncall", badge: "值", title: "鄭鴻翔", note: "26/6/1" },
      { kind: "next", badge: "N", title: "張婷亭", note: "6/2" },
    ],
    leaves: ["廖仁傑", "陳經國"],
  },
  {
    date: "2026-06-02",
    label: "6/2",
    areas: [
      { letter: "B", type: "ward", specialist: "沈宛君", doctors: ["余宗興", "林思維", "曾建仁"] },
      { letter: "C", type: "ward", specialist: "張婷亭", doctors: ["韓龍疇", "陳春丞", "鄭鴻翔"] },
      { letter: "D", type: "ward", specialist: "鄭鈺芬", doctors: ["陳經國", "田宇峯", "陳俊良"] },
      { letter: "E", type: "clinic", specialist: "郭子綺", doctors: ["王哲川", "王覲文", "王柏竣"] },
      { letter: "F", type: "ward", specialist: "黃嘉綺", doctors: ["沈坤宏", "蕭景星", "胡恭寧", "廖仁傑"] },
      { letter: "G", type: "support", specialist: "吳貞慧", doctors: ["于錫倩", "洪順興"] },
      { letter: "H", type: "support", specialist: "吳孟桂", doctors: ["腎內", "腸胃科"] },
      { letter: "I", type: "support", specialist: "許雯萍", doctors: ["心內", "胸內"] },
    ],
    duties: [
      { kind: "evening", badge: "E", title: "陳姿尹", note: "" },
      { kind: "oncall", badge: "值", title: "沈坤宏", note: "26/6/2" },
      { kind: "next", badge: "N", title: "鄭鈺芬", note: "6/3" },
    ],
    leaves: ["林思維", "王覲文"],
  },
];

const iconsByType = {
  ward: "users-round",
  clinic: "stethoscope",
  support: "stethoscope",
};

const fallbackPersonnel = {
  specialists: [
    { name: "吳貞慧", code: "8064" },
    { name: "吳孟桂", code: "8061" },
    { name: "許雯萍", code: "8287" },
    { name: "黃嘉綺", code: "8073" },
    { name: "王莉雅", code: "8049" },
    { name: "鮑惠琦", code: "8121" },
    { name: "陳姿尹", code: "8281" },
    { name: "沈宛君", code: "8122" },
    { name: "張婷亭", code: "8132" },
    { name: "鄭鈺芬", code: "8152" },
    { name: "郭子綺", code: "8173" },
    { name: "賴柔瑜", code: "8417" },
  ],
  doctors: [
    { name: "余宗興", code: "6231" },
    { name: "林思維", code: "5331" },
    { name: "曾建仁", code: "5619" },
    { name: "韓龍疇", code: "6017" },
    { name: "陳春丞", code: "6623" },
    { name: "鄭鴻翔", code: "3544" },
    { name: "陳經國", code: "3652" },
    { name: "田宇峯", code: "5520" },
    { name: "陳俊良", code: "8048" },
    { name: "王哲川", code: "5318" },
    { name: "王覲文", code: "8002" },
    { name: "王柏竣", code: "6654" },
    { name: "沈坤宏", code: "5189" },
    { name: "蕭景星", code: "8024" },
    { name: "胡恭寧", code: "6077" },
    { name: "廖仁傑", code: "6181" },
    { name: "關哲彥", code: "" },
    { name: "于錫倩", code: "8246" },
    { name: "洪順興", code: "5768" },
    { name: "施貿翔", code: "6482" },
    { name: "腎內", code: "" },
    { name: "洪綸吾", code: "3354" },
    { name: "神內", code: "" },
    { name: "腸胃科", code: "" },
    { name: "心內", code: "" },
    { name: "胸內", code: "" },
  ],
};

let schedulesByDate = new Map(schedules.map((schedule) => [schedule.date, schedule]));
let scheduleDates = new Set(schedules.map((schedule) => schedule.date));
const today = startOfDay(new Date());
const EDIT_PERMISSION_CODE = "cmh2026";
const SUPABASE_TABLE = "schedule_state";
const SUPABASE_ROW_ID = "default";
const LOCAL_SCHEDULE_STORAGE_KEY = "surgeryScheduleState";

let selectedDate = today;
let visibleMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
let personnel = fallbackPersonnel;
let specialistByName = buildSpecialistMap(personnel.specialists);
let doctorByName = buildPersonMap(personnel.doctors);
let activePicker = null;
let draggedDoctor = null;
let nextAreaCode = 1;
let isEditMode = false;
let editPermissionGranted = false;
let editPassword = "";
let supabaseClient = null;
let cloudReady = false;
let localBackupLoaded = false;
let saveTimer = null;
let remoteSubscription = null;
let lastSavedAt = null;
let authDialogResolve = null;

const areaGrid = document.querySelector("#areaGrid");
const dutyGrid = document.querySelector("#dutyGrid");
const leaveList = document.querySelector("#leaveList");
const dateLabel = document.querySelector("#currentDate");
const datePickerToggle = document.querySelector("#datePickerToggle");
const calendarPanel = document.querySelector("#calendarPanel");
const calendarMonth = document.querySelector("#calendarMonth");
const calendarGrid = document.querySelector("#calendarGrid");
const namePicker = document.querySelector("#namePicker");
const namePickerTitle = document.querySelector("#namePickerTitle");
const namePickerList = document.querySelector("#namePickerList");
const namePickerClose = document.querySelector("#namePickerClose");
const editModeToggle = document.querySelector("#editModeToggle");
const modeStatus = document.querySelector("#modeStatus");
const syncStatus = document.querySelector("#syncStatus");
const authDialog = document.querySelector("#authDialog");
const authForm = document.querySelector("#authForm");
const authPassword = document.querySelector("#authPassword");
const authCancelButton = document.querySelector("#authCancelButton");
const authMessage = document.querySelector("#authMessage");

function render() {
  const day = getScheduleForDate(selectedDate);
  const visibleAreas = getVisibleAreas(day);
  const normalizedDuties = normalizeDuties(day.duties, selectedDate);
  dateLabel.textContent = formatShortDate(selectedDate);

  areaGrid.innerHTML = [
    ...visibleAreas.map(({ area, areaIndex }, visibleIndex) =>
      renderAreaCard(area, areaIndex, isEditMode && visibleIndex === visibleAreas.length - 1 && visibleAreas.length > 4),
    ),
    isEditMode ? renderAddAreaCard() : "",
  ].join("");

  dutyGrid.innerHTML = normalizedDuties
    .sort((a, b) => dutyOrder(a.kind) - dutyOrder(b.kind))
    .map(renderDutyCard)
    .join("");
  leaveList.innerHTML = renderLeaveList(day);
  renderEditMode();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  renderCalendar();
}

function renderAreaCard(area, areaIndex, canDeleteArea = false) {
  const typeClass = area.type === "support" ? " support" : "";
  const specialist = formatSpecialistName(area.specialist);
  const doctors = compactDoctors(area);

  return `
    <article class="area-card">
      ${
        canDeleteArea
          ? `
            <button class="area-delete-button" type="button" data-action="delete-area" data-area-index="${areaIndex}" aria-label="刪除此區塊">
              <i data-lucide="x"></i>
            </button>
          `
          : ""
      }
      <div class="area-head">
        ${renderNameSlot({
          kind: "specialist",
          label: specialist,
          areaIndex,
          extraClass: "area-specialist",
        })}
        <span class="area-type${typeClass}">
          <i data-lucide="${iconsByType[area.type]}"></i>
        </span>
      </div>
      <ul class="doctor-list" data-area-index="${areaIndex}" aria-label="${area.letter} 區醫師">
        ${[
          ...doctors.map(
            (doctor, doctorIndex) => `
              <li>
                ${renderNameSlot({
                  kind: "doctor",
                  label: formatDoctorName(doctor),
                  areaIndex,
                  doctorIndex,
                  extraClass: "doctor-name-button",
                })}
              </li>
            `,
          ),
          `
            <li>
              ${renderNameSlot({
                kind: "doctor",
                label: "",
                areaIndex,
                extraClass: "doctor-name-button doctor-add-slot",
              })}
            </li>
          `,
        ].join("")}
      </ul>
    </article>
  `;
}

function renderNameSlot({ kind, label, areaIndex, doctorIndex = "", extraClass }) {
  const baseAttrs = `data-kind="${kind}" data-area-index="${areaIndex}" data-doctor-index="${doctorIndex}"`;
  const dragAttrs = isEditMode && kind === "doctor" && label ? `draggable="true" data-draggable-doctor="true"` : "";

  if (!isEditMode) {
    if (!label) return "";

    return `
      <span class="name-chip ${extraClass} is-readonly" ${baseAttrs}>
        <span class="name-chip-label">${label}</span>
      </span>
    `;
  }

  if (!label) {
    return `
      <button class="name-empty-slot ${extraClass}" type="button" data-action="open-picker" ${baseAttrs} aria-label="新增人員">
        <i data-lucide="plus"></i>
      </button>
    `;
  }

  return `
    <span class="name-chip ${extraClass}" ${baseAttrs} ${dragAttrs}>
      <button class="name-chip-label" type="button" data-action="open-picker" ${baseAttrs}>${label}</button>
      <button class="name-chip-delete" type="button" data-action="delete-name" ${baseAttrs} aria-label="刪除 ${label}">
        <i data-lucide="x"></i>
      </button>
    </span>
  `;
}

function renderAddAreaCard() {
  return `
    <button class="area-card add-area-card" type="button" data-action="add-area" aria-label="新增排班區塊">
      <span class="add-area-icon"><i data-lucide="plus"></i></span>
      <span>新增區塊</span>
    </button>
  `;
}

function renderDutyCard(duty) {
  const icon = duty.kind === "oncall" ? "calendar-check" : "calendar-days";
  const showNote = duty.note && duty.kind === "evening";
  const pickerKind = duty.kind === "oncall" ? "duty-doctor" : "duty-specialist";
  const editAttrs = isEditMode
    ? `
      data-action="open-picker"
      data-kind="${pickerKind}"
      data-duty-index="${duty.dutyIndex}"
      tabindex="0"
      role="button"
      aria-label="選擇${duty.kind === "oncall" ? "值班醫師" : "值班專師"}"
    `
    : "";

  return `
    <article
      class="duty-card is-${duty.kind}"
      ${editAttrs}
    >
      <span class="duty-badge">${duty.badge}</span>
      <div class="duty-meta">
        ${showNote ? `<small>${duty.note}</small>` : ""}
        ${
          isEditMode
            ? `<button
                class="duty-name-button"
                type="button"
                data-action="open-picker"
                data-kind="${pickerKind}"
                data-duty-index="${duty.dutyIndex}"
              >${formatDutyName(duty)}</button>`
            : `<span class="duty-name-button is-readonly">${formatDutyName(duty)}</span>`
        }
      </div>
      <span class="duty-icon"><i data-lucide="${icon}"></i></span>
    </article>
  `;
}

function dutyOrder(kind) {
  return { evening: 1, next: 2, oncall: 3 }[kind] ?? 9;
}

document.querySelector("#prevDay").addEventListener("click", () => {
  setSelectedDate(addDays(selectedDate, -1));
});

document.querySelector("#nextDay").addEventListener("click", () => {
  setSelectedDate(addDays(selectedDate, 1));
});

datePickerToggle.addEventListener("click", () => {
  const willOpen = calendarPanel.hidden;
  calendarPanel.hidden = !willOpen;
  datePickerToggle.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) {
    visibleMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    renderCalendar();
  }
});

document.querySelector("#prevMonth").addEventListener("click", () => {
  visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
  renderCalendar();
});

document.querySelector("#nextMonth").addEventListener("click", () => {
  visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
  renderCalendar();
});

document.addEventListener("click", (event) => {
  if (calendarPanel.hidden) return;
  if (event.target.closest(".date-switcher")) return;
  closeCalendar();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCalendar();
    closeNamePicker();
    closeAuthDialog(false);
  }
});

editModeToggle.addEventListener("click", async () => {
  if (isEditMode) {
    setEditMode(false);
    return;
  }

  if (await requestEditPermission()) {
    setEditMode(true);
  }
});

authCancelButton.addEventListener("click", () => {
  closeAuthDialog(false);
});

authDialog.addEventListener("click", (event) => {
  if (event.target === authDialog) {
    closeAuthDialog(false);
  }
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await signInForEditMode();
});

areaGrid.addEventListener("click", (event) => {
  if (!isEditMode) return;

  const control = event.target.closest("[data-action]");
  if (!control) return;

  const action = control.dataset.action;
  if (action === "add-area") {
    addArea();
    return;
  }

  if (action === "delete-area") {
    deleteArea(Number(control.dataset.areaIndex));
    return;
  }

  const kind = control.dataset.kind;
  const areaIndex = Number(control.dataset.areaIndex);
  const doctorIndex = control.dataset.doctorIndex === "" ? null : Number(control.dataset.doctorIndex);

  if (action === "delete-name") {
    deleteName(kind, areaIndex, doctorIndex);
  }

  if (action === "open-picker") {
    openNamePicker(kind, areaIndex, doctorIndex);
  }
});

dutyGrid.addEventListener("click", (event) => {
  if (!isEditMode) return;

  const control = event.target.closest("[data-action]");
  if (!control) return;

  if (control.dataset.action === "open-picker") {
    openNamePicker(control.dataset.kind, null, null, Number(control.dataset.dutyIndex));
  }
});

dutyGrid.addEventListener("keydown", (event) => {
  if (!isEditMode) return;
  if (event.key !== "Enter" && event.key !== " ") return;

  const control = event.target.closest(".duty-card[data-action]");
  if (!control) return;

  event.preventDefault();
  openNamePicker(control.dataset.kind, null, null, Number(control.dataset.dutyIndex));
});

areaGrid.addEventListener("dragstart", (event) => {
  if (!isEditMode) return;

  const chip = event.target.closest('[data-draggable-doctor="true"]');
  if (!chip) return;

  draggedDoctor = {
    areaIndex: Number(chip.dataset.areaIndex),
    doctorIndex: Number(chip.dataset.doctorIndex),
  };

  chip.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", JSON.stringify(draggedDoctor));
});

areaGrid.addEventListener("dragend", () => {
  draggedDoctor = null;
  areaGrid.querySelectorAll(".is-dragging, .is-drop-target").forEach((element) => {
    element.classList.remove("is-dragging", "is-drop-target");
  });
});

areaGrid.addEventListener("dragover", (event) => {
  if (!isEditMode) return;
  if (!draggedDoctor) return;

  const target = getDoctorDropTarget(event.target);
  if (!target) return;

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  areaGrid.querySelectorAll(".is-drop-target").forEach((element) => element.classList.remove("is-drop-target"));
  target.element.classList.add("is-drop-target");
});

areaGrid.addEventListener("dragleave", (event) => {
  const target = event.target.closest(".doctor-list, .doctor-name-button");
  if (target && !target.contains(event.relatedTarget)) {
    target.classList.remove("is-drop-target");
  }
});

areaGrid.addEventListener("drop", (event) => {
  if (!isEditMode) return;
  if (!draggedDoctor) return;

  const target = getDoctorDropTarget(event.target);
  if (!target) return;

  event.preventDefault();
  moveDoctor(draggedDoctor, target);
  draggedDoctor = null;
});

namePickerClose.addEventListener("click", closeNamePicker);

namePicker.addEventListener("click", (event) => {
  if (event.target === namePicker) {
    closeNamePicker();
  }
});

namePickerList.addEventListener("click", (event) => {
  const option = event.target.closest("[data-name]");
  if (!option || !activePicker) return;

  replaceName(option.dataset.name);
  closeNamePicker();
});

leaveList.addEventListener("click", (event) => {
  if (!isEditMode) return;

  const control = event.target.closest("[data-action]");
  if (!control) return;

  if (control.dataset.action === "add-leave") {
    openNamePicker("leave-doctor");
  }

  if (control.dataset.action === "delete-leave") {
    deleteLeaveDoctor(Number(control.dataset.leaveIndex));
  }
});

function renderCalendar() {
  calendarMonth.textContent = `${visibleMonth.getFullYear()}年 ${visibleMonth.getMonth() + 1}月`;

  const firstOfMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const firstCell = addDays(firstOfMonth, -firstOfMonth.getDay());
  const days = Array.from({ length: 42 }, (_, index) => addDays(firstCell, index));

  calendarGrid.innerHTML = days
    .map((date) => {
      const iso = toIsoDate(date);
      const classes = [
        "calendar-day",
        date.getMonth() !== visibleMonth.getMonth() ? "is-outside" : "",
        isSameDay(date, today) ? "is-today" : "",
        isSameDay(date, selectedDate) ? "is-selected" : "",
        scheduleDates.has(iso) ? "has-schedule" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `<button class="${classes}" type="button" data-date="${iso}" role="gridcell">${date.getDate()}</button>`;
    })
    .join("");

  calendarGrid.querySelectorAll(".calendar-day").forEach((button) => {
    button.addEventListener("click", () => {
      setSelectedDate(parseLocalDate(button.dataset.date));
      closeCalendar();
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setSelectedDate(date) {
  selectedDate = startOfDay(date);
  visibleMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  render();
}

function closeCalendar() {
  calendarPanel.hidden = true;
  datePickerToggle.setAttribute("aria-expanded", "false");
}

async function requestEditPermission() {
  if (editPassword) return true;

  if (cloudReady) {
    return openAuthDialog();
  }

  if (editPermissionGranted) return true;

  const code = window.prompt("Supabase 尚未設定，請輸入本機修改密碼");
  if (code === null) return false;

  if (code.trim() === EDIT_PERMISSION_CODE) {
    editPermissionGranted = true;
    editPassword = code.trim();
    setSyncStatus("本機修改中");
    return true;
  }

  window.alert("權限密碼不正確，仍維持檢視模式。");
  return false;
}

function openAuthDialog() {
  authMessage.textContent = "";
  authPassword.value = "";
  authDialog.hidden = false;
  window.setTimeout(() => authPassword.focus(), 0);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  return new Promise((resolve) => {
    authDialogResolve = resolve;
  });
}

function closeAuthDialog(result) {
  if (authDialog.hidden) return;
  authDialog.hidden = true;
  authMessage.textContent = "";
  authPassword.value = "";

  if (authDialogResolve) {
    authDialogResolve(result);
    authDialogResolve = null;
  }
}

async function signInForEditMode() {
  if (!supabaseClient) return;

  const password = authPassword.value;
  authMessage.textContent = "驗證中...";

  const { data, error } = await supabaseClient.rpc("verify_schedule_password", { password });
  if (error || data !== true) {
    authMessage.textContent = "修改密碼不正確。";
    return;
  }

  editPassword = password;
  authMessage.textContent = "";
  closeAuthDialog(true);
  updateAuthUi();
}

function setEditMode(nextEditMode) {
  isEditMode = nextEditMode;
  if (!isEditMode) {
    draggedDoctor = null;
    editPassword = "";
    closeNamePicker();
  }
  render();
}

function renderEditMode() {
  document.body.classList.toggle("is-edit-mode", isEditMode);
  modeStatus.textContent = isEditMode ? "修改模式" : "檢視模式";
  editModeToggle.setAttribute("aria-pressed", String(isEditMode));
  editModeToggle.innerHTML = `
    <i data-lucide="${isEditMode ? "check" : "lock-keyhole"}"></i>
    <span>${isEditMode ? "完成修改" : "修改模式"}</span>
  `;
  updateAuthUi();
}

function updateAuthUi() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setSyncStatus(message, state = "") {
  syncStatus.textContent = message;
  syncStatus.dataset.state = state;
}

function isSupabaseConfigured() {
  const config = window.SCHEDULE_SUPABASE_CONFIG;
  return Boolean(
    config?.url?.startsWith("https://") &&
      config?.anonKey &&
      config.anonKey.length > 20 &&
      !config.anonKey.includes("YOUR_"),
  );
}

async function initSupabase() {
  if (!isSupabaseConfigured() || !window.supabase?.createClient) {
    setSyncStatus(localBackupLoaded ? "本機已還原" : "本機資料", "local");
    return;
  }

  const { url, anonKey } = window.SCHEDULE_SUPABASE_CONFIG;
  supabaseClient = window.supabase.createClient(url, anonKey);
  cloudReady = true;
  setSyncStatus("連線中...", "loading");

  updateAuthUi();
  await loadScheduleFromCloud();
  subscribeToScheduleChanges();
}

async function loadScheduleFromCloud() {
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from(SUPABASE_TABLE)
    .select("data, updated_at")
    .eq("id", SUPABASE_ROW_ID)
    .maybeSingle();

  if (error) {
    setSyncStatus("雲端讀取失敗", "error");
    console.info("Supabase schedule load failed.", error);
    return;
  }

  if (Array.isArray(data?.data) && data.data.length) {
    applyCloudSchedules(data.data);
    saveScheduleBackup();
    lastSavedAt = data.updated_at;
    setSyncStatus("雲端已同步", "synced");
    render();
    return;
  }

  setSyncStatus(localBackupLoaded ? "本機已還原" : "使用內建資料", "local");
}

function subscribeToScheduleChanges() {
  if (!supabaseClient || remoteSubscription) return;

  remoteSubscription = supabaseClient
    .channel("schedule-state")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: SUPABASE_TABLE, filter: `id=eq.${SUPABASE_ROW_ID}` },
      (payload) => {
        const nextData = payload.new?.data;
        if (!Array.isArray(nextData) || !nextData.length) return;
        if (payload.new?.updated_at && payload.new.updated_at === lastSavedAt) return;
        applyCloudSchedules(nextData);
        lastSavedAt = payload.new?.updated_at ?? lastSavedAt;
        setSyncStatus("雲端已更新", "synced");
        render();
      },
    )
    .subscribe();
}

function applyCloudSchedules(nextSchedules) {
  schedules = sanitizeSchedules(nextSchedules);
  rebuildScheduleIndexes();
}

function rebuildScheduleIndexes() {
  schedulesByDate = new Map(schedules.map((schedule) => [schedule.date, schedule]));
  scheduleDates = new Set(schedules.map((schedule) => schedule.date));
}

function queueSaveSchedule() {
  if (!cloudReady || !supabaseClient) {
    saveScheduleBackup();
    setSyncStatus("本機已儲存", "local");
    return;
  }

  if (!editPassword) {
    setSyncStatus("尚未輸入密碼", "error");
    return;
  }

  window.clearTimeout(saveTimer);
  setSyncStatus("儲存中...", "loading");
  saveTimer = window.setTimeout(saveScheduleToCloud, 600);
}

async function saveScheduleToCloud() {
  if (!supabaseClient || !editPassword) return;

  const { data, error } = await supabaseClient.rpc("save_schedule_state", {
    password: editPassword,
    schedule_data: serializeSchedules(),
  });

  if (error) {
    saveScheduleBackup();
    setSyncStatus("雲端失敗，已存本機", "error");
    console.info("Supabase schedule save failed.", error);
    return;
  }

  lastSavedAt = data?.updated_at ?? new Date().toISOString();
  saveScheduleBackup();
  setSyncStatus("已儲存雲端", "synced");
}

function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function loadScheduleBackup() {
  try {
    const rawValue = localStorage.getItem(LOCAL_SCHEDULE_STORAGE_KEY);
    if (!rawValue) return false;

    const parsedValue = JSON.parse(rawValue);
    if (!Array.isArray(parsedValue) || !parsedValue.length) return false;

    applyCloudSchedules(parsedValue);
    return true;
  } catch (error) {
    console.info("本機班表備份讀取失敗。", error);
    return false;
  }
}

function saveScheduleBackup() {
  try {
    localStorage.setItem(LOCAL_SCHEDULE_STORAGE_KEY, JSON.stringify(serializeSchedules()));
    localBackupLoaded = true;
  } catch (error) {
    console.info("本機班表備份儲存失敗。", error);
  }
}

function serializeSchedules() {
  return schedules.map((schedule) => ({
    date: schedule.date,
    label: schedule.label,
    areas: (schedule.areas ?? []).map((area) => ({
      letter: area.letter,
      type: area.type,
      visible: area.visible,
      specialist: area.specialist,
      doctors: [...(area.doctors ?? [])],
    })),
    duties: (schedule.duties ?? []).map((duty) => ({
      kind: duty.kind,
      badge: duty.badge,
      title: duty.title,
      note: duty.note ?? "",
    })),
    leaves: [...(schedule.leaves ?? [])],
  }));
}

function sanitizeSchedules(nextSchedules) {
  return structuredCloneSafe(nextSchedules)
    .filter((schedule) => schedule?.date)
    .map((schedule) => ({
      date: schedule.date,
      label: schedule.label ?? formatShortDate(parseLocalDate(schedule.date)),
      areas: (schedule.areas ?? []).map((area) => ({
        letter: area.letter ?? "",
        type: area.type ?? "ward",
        visible: area.visible,
        specialist: area.specialist ?? "",
        doctors: (area.doctors ?? []).filter(Boolean),
      })),
      duties: (schedule.duties ?? []).map((duty) => ({
        kind: duty.kind,
        badge: duty.badge,
        title: duty.title ?? "",
        note: duty.note ?? "",
      })),
      leaves: schedule.leaves ?? [],
    }));
}

function getScheduleForDate(date) {
  return schedulesByDate.get(toIsoDate(date)) ?? schedules[0] ?? { date: toIsoDate(date), areas: [], duties: [], leaves: [] };
}

function deleteName(kind, areaIndex, doctorIndex) {
  if (!isEditMode) return;

  const day = getScheduleForDate(selectedDate);
  const area = day.areas[areaIndex];
  if (!area) return;

  if (kind === "specialist") {
    area.specialist = "";
  }

  if (kind === "doctor" && doctorIndex !== null) {
    area.doctors.splice(doctorIndex, 1);
  }

  render();
  queueSaveSchedule();
}

function addArea() {
  if (!isEditMode) return;

  const day = getScheduleForDate(selectedDate);
  day.areas.push({
    letter: `新增${nextAreaCode++}`,
    type: "ward",
    visible: true,
    specialist: "",
    doctors: [],
  });
  render();
  queueSaveSchedule();
}

function deleteArea(areaIndex) {
  if (!isEditMode) return;

  const day = getScheduleForDate(selectedDate);
  const visibleAreas = getVisibleAreas(day);
  const lastVisible = visibleAreas.at(-1);
  if (visibleAreas.length <= 4 || lastVisible?.areaIndex !== areaIndex) return;
  day.areas.splice(areaIndex, 1);
  render();
  queueSaveSchedule();
}

function getVisibleAreas(day) {
  ensureAreaVisibility(day);
  return day.areas
    .map((area, areaIndex) => ({ area, areaIndex }))
    .filter(({ area }) => area.visible);
}

function ensureAreaVisibility(day) {
  if (day._areaVisibilityReady) return;
  day.areas.forEach((area, index) => {
    area.visible = index < 4;
  });
  day._areaVisibilityReady = true;
}

function getDoctorDropTarget(target) {
  const doctorSlot = target.closest('[data-kind="doctor"]');
  if (doctorSlot) {
    return {
      areaIndex: Number(doctorSlot.dataset.areaIndex),
      doctorIndex: doctorSlot.dataset.doctorIndex === "" ? null : Number(doctorSlot.dataset.doctorIndex),
      element: doctorSlot.classList.contains("doctor-name-button") ? doctorSlot : doctorSlot.closest(".doctor-name-button"),
    };
  }

  const doctorList = target.closest(".doctor-list");
  if (doctorList) {
    return {
      areaIndex: Number(doctorList.dataset.areaIndex),
      doctorIndex: null,
      element: doctorList,
    };
  }

  return null;
}

function moveDoctor(source, target) {
  if (!isEditMode) return;

  const day = getScheduleForDate(selectedDate);
  const sourceArea = day.areas[source.areaIndex];
  const targetArea = day.areas[target.areaIndex];
  if (!sourceArea || !targetArea) return;
  compactDoctors(sourceArea);
  compactDoctors(targetArea);

  const sourceName = sourceArea.doctors[source.doctorIndex];
  if (!sourceName) return;

  if (source.areaIndex === target.areaIndex && source.doctorIndex === target.doctorIndex) {
    return;
  }

  sourceArea.doctors.splice(source.doctorIndex, 1);

  let insertIndex = target.doctorIndex;
  if (insertIndex === null) {
    insertIndex = targetArea.doctors.length;
  }

  if (source.areaIndex === target.areaIndex && source.doctorIndex < insertIndex) {
    insertIndex -= 1;
  }

  targetArea.doctors.splice(insertIndex, 0, sourceName);
  render();
  queueSaveSchedule();
}

function openNamePicker(kind, areaIndex, doctorIndex, dutyIndex = null) {
  if (!isEditMode) return;

  activePicker = { kind, areaIndex, doctorIndex, dutyIndex };
  const isSpecialistPicker = kind === "specialist" || kind === "duty-specialist";
  const options = isSpecialistPicker ? personnel.specialists : personnel.doctors;
  namePickerTitle.textContent = isSpecialistPicker ? "選擇專師" : "選擇醫師";
  namePickerList.innerHTML = options.map((person) => renderNameOption(person, isSpecialistPicker ? "specialist" : "doctor")).join("");
  namePicker.hidden = false;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderNameOption(person, kind) {
  const name = typeof person === "string" ? person : person.name;
  const displayName = kind === "specialist" ? formatSpecialistName(name) : formatDoctorName(name);

  return `<button class="name-picker-option" type="button" data-name="${name}">${displayName}</button>`;
}

function replaceName(name) {
  if (!isEditMode) return;

  const day = getScheduleForDate(selectedDate);

  if (activePicker.kind === "leave-doctor") {
    if (!day.leaves.includes(name)) {
      day.leaves.push(name);
    }
    render();
    queueSaveSchedule();
    return;
  }

  if (activePicker.kind === "duty-specialist" || activePicker.kind === "duty-doctor") {
    const duty = day.duties[activePicker.dutyIndex];
    if (duty) {
      duty.title = name;
    }
    render();
    queueSaveSchedule();
    return;
  }

  const area = day.areas[activePicker.areaIndex];
  if (!area) return;

  if (activePicker.kind === "specialist") {
    area.specialist = name;
  }

  if (activePicker.kind === "doctor" && activePicker.doctorIndex !== null) {
    area.doctors[activePicker.doctorIndex] = name;
  }

  if (activePicker.kind === "doctor" && activePicker.doctorIndex === null) {
    area.doctors.push(name);
  }

  render();
  queueSaveSchedule();
}

function renderLeaveList(day) {
  const leaveItems = day.leaves.length
    ? day.leaves
        .map(
          (name, leaveIndex) => `
            <span class="leave-chip">
              <i>休</i>
              <span>${formatDoctorName(name)}</span>
              ${
                isEditMode
                  ? `<button class="leave-delete-button" type="button" data-action="delete-leave" data-leave-index="${leaveIndex}" aria-label="刪除 ${name}">
                      <i data-lucide="x"></i>
                    </button>`
                  : ""
              }
            </span>
          `,
        )
        .join("")
    : `<span class="leave-chip leave-empty"><i>OK</i><span>無請假醫師</span></span>`;

  return `
    ${leaveItems}
    ${
      isEditMode
        ? `<button class="leave-add-button" type="button" data-action="add-leave" aria-label="新增請假醫師">
            <i data-lucide="plus"></i>
            <span>新增</span>
          </button>`
        : ""
    }
  `;
}

function deleteLeaveDoctor(leaveIndex) {
  if (!isEditMode) return;

  const day = getScheduleForDate(selectedDate);
  day.leaves.splice(leaveIndex, 1);
  render();
  queueSaveSchedule();
}

function closeNamePicker() {
  namePicker.hidden = true;
  activePicker = null;
}

function compactDoctors(area) {
  area.doctors = (area.doctors ?? []).filter(Boolean);
  return area.doctors;
}

function normalizeDuties(duties, date) {
  return duties.map((duty, dutyIndex) => {
    if (duty.kind === "oncall") {
      return { ...duty, dutyIndex, note: formatDutyDate(date) };
    }

    if (duty.kind === "next") {
      return { ...duty, dutyIndex, note: formatShortDate(addDays(date, 1)) };
    }

    return { ...duty, dutyIndex };
  });
}

function formatShortDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function formatDutyDate(date) {
  const year = String(date.getFullYear()).slice(-2);
  return `${year}/${date.getMonth() + 1}/${date.getDate()}`;
}

function addDays(date, amount) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(left, right) {
  return toIsoDate(left) === toIsoDate(right);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatSpecialistName(name) {
  const specialist = specialistByName.get(name);
  return specialist?.code ? `${specialist.name}(${specialist.code})` : name;
}

function formatDoctorName(name) {
  const doctor = doctorByName.get(name);
  return doctor?.code ? `${doctor.name}(${doctor.code})` : name;
}

function formatDutyName(duty) {
  if (duty.kind === "oncall") {
    return formatDoctorName(duty.title);
  }

  return formatSpecialistName(duty.title);
}

function buildSpecialistMap(specialists) {
  return new Map(specialists.map((specialist) => [specialist.name, specialist]));
}

function buildPersonMap(people) {
  return new Map(
    people.map((person) => {
      if (typeof person === "string") {
        return [person, { name: person, code: "" }];
      }

      return [person.name, person];
    }),
  );
}

async function loadPersonnelFromExcel() {
  if (!window.XLSX) return fallbackPersonnel;

  const response = await fetch("./人員資料.xlsx");
  if (!response.ok) {
    throw new Error("人員資料.xlsx 無法讀取");
  }

  const buffer = await response.arrayBuffer();
  const workbook = window.XLSX.read(buffer, { type: "array" });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = window.XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: "" });

  const specialists = [];
  const doctors = [];

  rows.slice(1).forEach((row) => {
    const specialistName = cleanCell(row[0]);
    const specialistCode = cleanCell(row[1]);
    const doctorName = cleanCell(row[3]);
    const doctorCode = cleanCell(row[4]);

    if (specialistName) {
      specialists.push({ name: specialistName, code: specialistCode });
    }

    if (doctorName) {
      doctors.push({ name: doctorName, code: doctorCode });
    }
  });

  return {
    specialists: specialists.length ? specialists : fallbackPersonnel.specialists,
    doctors: doctors.length ? doctors : fallbackPersonnel.doctors,
  };
}

function cleanCell(value) {
  return String(value ?? "").trim();
}

async function init() {
  localBackupLoaded = loadScheduleBackup();
  render();

  try {
    await initSupabase();
  } catch (error) {
    setSyncStatus("雲端連線失敗", "error");
    console.info("Supabase 初始化失敗。", error);
  }

  try {
    personnel = await loadPersonnelFromExcel();
    specialistByName = buildSpecialistMap(personnel.specialists);
    doctorByName = buildPersonMap(personnel.doctors);
    render();
  } catch (error) {
    console.info("使用內建人員資料備援。", error);
  }
}

init();
