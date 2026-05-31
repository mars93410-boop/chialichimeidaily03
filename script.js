const schedules = [
  {
    date: "2026-05-31",
    label: "5/31",
    areas: [
      { letter: "B", type: "ward", specialist: "張婷婷", doctors: ["余宗興", "林思維", "曾建仁"] },
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
      { letter: "C", type: "clinic", specialist: "張婷婷", doctors: ["韓龍疇", "陳春丞", "鄭鴻翔"] },
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
      { kind: "next", badge: "N", title: "張婷婷", note: "6/2" },
    ],
    leaves: ["廖仁傑", "陳經國"],
  },
  {
    date: "2026-06-02",
    label: "6/2",
    areas: [
      { letter: "B", type: "ward", specialist: "沈宛君", doctors: ["余宗興", "林思維", "曾建仁"] },
      { letter: "C", type: "ward", specialist: "張婷婷", doctors: ["韓龍疇", "陳春丞", "鄭鴻翔"] },
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
    { name: "張婷婷", code: "8132" },
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

const schedulesByDate = new Map(schedules.map((schedule) => [schedule.date, schedule]));
const scheduleDates = new Set(schedules.map((schedule) => schedule.date));
const today = startOfDay(new Date());

let selectedDate = today;
let visibleMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
let personnel = fallbackPersonnel;
let specialistByName = buildSpecialistMap(personnel.specialists);
let doctorByName = buildPersonMap(personnel.doctors);
let activePicker = null;
let draggedDoctor = null;
let nextAreaCode = 1;

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

function render() {
  const day = getScheduleForDate(selectedDate);
  const visibleAreas = getVisibleAreas(day);
  const normalizedDuties = normalizeDuties(day.duties, selectedDate);
  dateLabel.textContent = formatShortDate(selectedDate);

  areaGrid.innerHTML = [
    ...visibleAreas.map(({ area, areaIndex }, visibleIndex) =>
      renderAreaCard(area, areaIndex, visibleIndex === visibleAreas.length - 1 && visibleAreas.length > 4),
    ),
    renderAddAreaCard(),
  ].join("");

  dutyGrid.innerHTML = normalizedDuties
    .sort((a, b) => dutyOrder(a.kind) - dutyOrder(b.kind))
    .map(renderDutyCard)
    .join("");
  leaveList.innerHTML = renderLeaveList(day);

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
  const dragAttrs = kind === "doctor" && label ? `draggable="true" data-draggable-doctor="true"` : "";

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
  return `
    <article
      class="duty-card is-${duty.kind}"
      data-action="open-picker"
      data-kind="${pickerKind}"
      data-duty-index="${duty.dutyIndex}"
      tabindex="0"
      role="button"
      aria-label="選擇${duty.kind === "oncall" ? "值班醫師" : "值班專師"}"
    >
      <span class="duty-badge">${duty.badge}</span>
      <div class="duty-meta">
        ${showNote ? `<small>${duty.note}</small>` : ""}
        <button
          class="duty-name-button"
          type="button"
          data-action="open-picker"
          data-kind="${pickerKind}"
          data-duty-index="${duty.dutyIndex}"
        >${formatDutyName(duty)}</button>
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
  }
});

areaGrid.addEventListener("click", (event) => {
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
  const control = event.target.closest("[data-action]");
  if (!control) return;

  if (control.dataset.action === "open-picker") {
    openNamePicker(control.dataset.kind, null, null, Number(control.dataset.dutyIndex));
  }
});

dutyGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const control = event.target.closest(".duty-card[data-action]");
  if (!control) return;

  event.preventDefault();
  openNamePicker(control.dataset.kind, null, null, Number(control.dataset.dutyIndex));
});

areaGrid.addEventListener("dragstart", (event) => {
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

function getScheduleForDate(date) {
  return schedulesByDate.get(toIsoDate(date)) ?? schedules[0];
}

function deleteName(kind, areaIndex, doctorIndex) {
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
}

function addArea() {
  const day = getScheduleForDate(selectedDate);
  day.areas.push({
    letter: `新增${nextAreaCode++}`,
    type: "ward",
    visible: true,
    specialist: "",
    doctors: [],
  });
  render();
}

function deleteArea(areaIndex) {
  const day = getScheduleForDate(selectedDate);
  const visibleAreas = getVisibleAreas(day);
  const lastVisible = visibleAreas.at(-1);
  if (visibleAreas.length <= 4 || lastVisible?.areaIndex !== areaIndex) return;
  day.areas.splice(areaIndex, 1);
  render();
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
}

function openNamePicker(kind, areaIndex, doctorIndex, dutyIndex = null) {
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
  const day = getScheduleForDate(selectedDate);

  if (activePicker.kind === "leave-doctor") {
    if (!day.leaves.includes(name)) {
      day.leaves.push(name);
    }
    render();
    return;
  }

  if (activePicker.kind === "duty-specialist" || activePicker.kind === "duty-doctor") {
    const duty = day.duties[activePicker.dutyIndex];
    if (duty) {
      duty.title = name;
    }
    render();
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
}

function renderLeaveList(day) {
  const leaveItems = day.leaves.length
    ? day.leaves
        .map(
          (name, leaveIndex) => `
            <span class="leave-chip">
              <i>休</i>
              <span>${formatDoctorName(name)}</span>
              <button class="leave-delete-button" type="button" data-action="delete-leave" data-leave-index="${leaveIndex}" aria-label="刪除 ${name}">
                <i data-lucide="x"></i>
              </button>
            </span>
          `,
        )
        .join("")
    : `<span class="leave-chip leave-empty"><i>OK</i><span>無請假醫師</span></span>`;

  return `
    ${leaveItems}
    <button class="leave-add-button" type="button" data-action="add-leave" aria-label="新增請假醫師">
      <i data-lucide="plus"></i>
      <span>新增</span>
    </button>
  `;
}

function deleteLeaveDoctor(leaveIndex) {
  const day = getScheduleForDate(selectedDate);
  day.leaves.splice(leaveIndex, 1);
  render();
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
  render();

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
