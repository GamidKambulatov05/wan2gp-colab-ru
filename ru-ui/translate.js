(function () {
  "use strict";

  // Переводим по технической id вкладки — надёжно, не ломается при обновлениях WanGP.
  var TAB_LABELS = {
    media_gen: "Генератор медиа",
    plugin_mask_generator: "Генератор масок",
    plugin_motion_designer: "Дизайнер движения",
    plugin_info: "Гайды",
    plugin_configuration: "Настройки",
    plugin_plugin_manager_tab: "Плагины",
    plugin_about_tab: "О программе",
    t2v: "Текст в видео",
    t2i: "Текст в изображение",
  };

  // Точный перевод часто встречающихся кнопок/подписей.
  var TEXT_MAP = {
    "Apply": "Применить",
    "Refresh": "Обновить",
    "Save": "Сохранить",
    "Delete": "Удалить",
    "Generate": "Сгенерировать",
    "Run": "Запустить",
    "Cancel": "Отмена",
    "Confirm": "Подтвердить",
    "Confirm Delete": "Подтвердить удаление",
    "Create": "Создать",
    "Create & New": "Создать и новый",
    "Create New Finetune": "Создать новый файнтюн",
    "Don't do it !": "Отмена",
    "Go Ahead Save it !": "Да, сохранить!",
    "Go Ahead Delete it !": "Да, удалить!",
    "Silent Cancel": "Тихая отмена",
    "Clear": "Очистить",
    "Clear Queue": "Очистить очередь",
    "Add": "Добавить",
    "Add New Prompt To Queue": "Добавить промпт в очередь",
    "Remove": "Убрать",
    "Exit": "Выход",
    "Abort": "Прервать",
    "Stop": "Стоп",
    "Pause": "Пауза",
    "Resume": "Продолжить",
    "Apply Audio Postprocessing": "Применить постобработку звука",
    "Apply Edits": "Применить изменения",
    "Apply Postprocessing": "Применить постобработку",
    "Download Lora": "Скачать LoRA",
    "Enter Lora URL": "Введите ссылку на LoRA",
    "Export Settings to File": "Экспортировать настройки в файл",
    "Extend this Sample": "Продлить этот пример",
    "Extract Settings": "Извлечь настройки",
    "Extracting": "Извлечение…",
    "Import Finetune JSON": "Импортировать JSON файнтюна",
    "Load Settings From Media File / Json / Zip": "Загрузить настройки из медиафайла / JSON / ZIP",
    "One More Sample": "Ещё один пример",
    "Reset Settings": "Сбросить настройки",
    "Save and Quit": "Сохранить и выйти",
    "Set Settings as Default": "Сделать настройками по умолчанию",
    "Close information": "Закрыть информацию",
    "Eject Audio": "Извлечь аудио",
    "Eject Audio File": "Извлечь аудиофайл",
    "Eject Deleted File": "Извлечь удалённый файл",
    "Eject Image": "Извлечь изображение",
    "Eject Media": "Извлечь медиафайл",
    "Eject Video": "Извлечь видео",
    "Upload file": "Загрузить файл",
    "Capture from camera": "Снять камерой",
    "Record audio": "Записать аудио",
    "Paste from clipboard": "Вставить из буфера",
    "Prompt Guidelines": "Советы по промпту",
    "Dictate prompt": "Надиктовать промпт",
    "Prompt Helper": "Помощник промпта",
    "Enhance Prompt": "Улучшить промпт",
    "Right ▶": "Вправо ▶",
    "◀ Left": "◀ Влево",
    "Folder": "Папка",
    "Up": "Вверх",
    "Brush": "Кисть",
    "New Video": "Новое видео",
    "Text Prompt": "Только текст",
    "Start with Image": "Начать с изображения",
    "Continue Video": "Продолжить видео",
    "Continue Last Video": "Продолжить последнее видео",
    "Video / Images Gallery": "Галерея видео / изображений",
    "Audio Files Gallery": "Галерея аудио",
    "Audio Gallery": "Галерея аудио",
    "Video to Continue": "Видео для продолжения",
    "Generated videos": "Сгенерированные видео",
    "MULTI image": "Несколько изображений",
    "ONE image": "Одно изображение",
    "All model families": "Все семейства моделей",
    "Movie model families": "Видео-модели",
    "Image-only model families": "Только изображения",
    "Audio-only model families": "Только аудио",
    "Search models": "Поиск моделей",
    "Apply model search": "Применить поиск моделей",
    "Close model search": "Закрыть поиск моделей",
    "Apply model output filter": "Применить фильтр моделей",
    "Choose a Lora Preset or a Settings file in this List": "Выбери пресет LoRA или файл настроек из списка",
    "No matching LoRAs": "Подходящих LoRA не найдено",
    "Activated LoRAs": "Активные LoRA",
    "Always Loaded LoRAs": "Всегда загружаемые LoRA",
    "LoRAs Multipliers": "Множители LoRA",
    "Lora URL": "Ссылка на LoRA",
    "LoRAs Multipliers (1.0 by default) separated by Space chars or CR, lines that start with # are ignored": "Множители LoRA (по умолчанию 1.0), через пробел или новую строку; строки с # игнорируются",
    "model mode": "режим модели",
    "1024x2048": "1024x2048",
    ">=720&<=1440": ">=720&<=1440",
    "Custom Resolutions (one WxH value per line)": "Свои разрешения (по одному ШxВ на строку)",
    "Description": "Описание",
    "Finetune Parameter 1": "Параметр файнтюна 1",
    "Finetune Parameter 2": "Параметр файнтюна 2",
    "Finetune Parameter 3": "Параметр файнтюна 3",
    "Id": "ID",
    "Main Checkpoints": "Основные чекпоинты",
    "Max Tokens (empty = auto)": "Макс. токенов (пусто = автоматически)",
    "Name": "Название",
    "Resolution Categories Conditions (OR operator between lines)": "Условия категорий разрешения (условие ИЛИ между строками)",
    "Secondary Checkpoints": "Дополнительные чекпоинты",
    "Source Model": "Исходная модель",
    "System Prompt": "Системный промпт",
    "Text Encoder Checkpoints": "Чекпоинты текстового энкодера",
    "Use Current Model Settings as Default Settings": "Сделать настройки текущей модели настройками по умолчанию",
    "Max Objects": "Макс. объектов",
    "Max Time (s)": "Макс. время (сек)",
    "Negative Mask": "Инвертированная маска",
    "person, car, sky": "человек, машина, небо",
    "(recommended to keep it at 97)": "(рекомендуется оставить 97)",
    "Preview not yet Available": "Предпросмотр пока недоступен",
    "AVAILABLE": "ДОСТУПНО",
    "Adaptive Projected Guidance (requires Guidance > 1 or Audio Guidance > 1)": "Адаптивное проецируемое наведение (нужен Guidance > 1 или Audio Guidance > 1)",
    "Advanced Mode": "Продвинутый режим",
    "Automatic Removal of Background behind People or Objects in Reference Images": "Автоматическое удаление фона за людьми/объектами на референсных изображениях",
    "CFG Zero below this Layer (Extra Process)": "CFG Zero ниже этого слоя (доп. обработка)",
    "Capped By": "Ограничено",
    "Category": "Категория",
    "Certainty Percentage Skip": "Пропуск по проценту уверенности",
    "Classifier-Free Guidance Star (requires Guidance > 1)": "Classifier-Free Guidance Star (нужен Guidance > 1)",
    "Control Image": "Контрольное изображение",
    "Control Image to be Inpainted": "Контрольное изображение для инпейнтинга",
    "Control Video": "Контрольное видео",
    "Control Video / Control Audio / Positioned Frames Temporal Alignment when any Video to continue": "Синхронизация по времени контрольного видео/аудио/позиционированных кадров при продолжении видео",
    "Custom Checkbbox": "Свой чекбокс",
    "Custom Dropdown": "Свой выпадающий список",
    "Custom Guide": "Свой гайд",
    "Denoising Steps % end": "Денойзинг: конец диапазона шагов (%)",
    "Denoising Steps % start": "Денойзинг: начало диапазона шагов (%)",
    "Denoising Strength (the Lower the Closer to the Control Image/Video)": "Сила денойзинга (чем меньше — тем ближе к контрольному изображению/видео)",
    "Early Stop": "Ранняя остановка",
    "Embedded Guidance Scale": "Встроенный масштаб наведения (Guidance Scale)",
    "End Image(s)": "Конечное(ые) изображение(я)",
    "Enhanced Prompt": "Улучшенный промпт",
    "Film Grain Intensity (0 = disabled)": "Интенсивность зернистости плёнки (0 = выкл.)",
    "Film Grain Saturation": "Насыщенность зернистости плёнки",
    "Frames to keep in Control Video (empty=All, 1=first, a:b for a range, space to separate values)": "Какие кадры оставить в контрольном видео (пусто=все, 1=первый, a:b — диапазон, пробел — разделитель)",
    "Generate additional frames before keeping the first image": "Сгенерировать дополнительные кадры перед сохранением первого изображения",
    "Generation References": "Референсы для генерации",
    "Guidance": "Наведение (Guidance)",
    "Guidance Phases": "Фазы наведения",
    "How to Process each Line of the Text Prompt": "Как обрабатывать каждую строку текстового промпта",
    "Image Mask Area (for Inpainting, white = Control Area, black = Unchanged)": "Область маски изображения (для инпейнтинга: белое = зона правки, чёрное = без изменений)",
    "Images as starting points for new Videos in the Generation Queue": "Изображения как стартовые кадры для новых видео в очереди генерации",
    "Images as ending points for new Videos in the Generation Queue": "Изображения как конечные кадры для новых видео в очереди генерации",
    "Import Videos / Images / Audio Files": "Импортировать видео / изображения / аудио",
    "Include Media": "Включить медиафайлы",
    "Iterations": "Итерации",
    "Location": "Расположение",
    "Masking Strength (the Lower the More Freedom for Unmasked Area)": "Сила маскирования (чем меньше — тем больше свободы вне маски)",
    "Expand / Shrink Mask Area": "Расширить / сузить область маски",
    "Max Duration": "Макс. длительность",
    "Media to Import in Galleries": "Медиафайлы для импорта в галереи",
    "Model Switch": "Переключение модели",
    "Multiple Images as Texts Prompts": "Несколько изображений как текстовые промпты",
    "Negative Prompt": "Негативный промпт",
    "Normalize Audio Volumes": "Нормализовать громкость аудио",
    "Ignore Background Music (for better LipSync)": "Игнорировать фоновую музыку (для лучшей синхронизации губ)",
    "Number of Images": "Количество изображений",
    "Number of Inference Steps": "Количество шагов генерации",
    "Number of frames": "Количество кадров",
    "Outer Box Resolution (one dimension may be less to preserve video W/H ratio)": "Разрешение внешней рамки (одна сторона может быть меньше для сохранения пропорций видео)",
    "Output Filename (Leave Blank for Auto Naming)": "Имя файла результата (оставь пустым для автоназвания)",
    "Output Resolution (Input Images wil be Cropped if the W/H ratio is different)": "Разрешение результата (входные изображения обрежутся, если пропорции не совпадают)",
    "Pause between Multi Speakers sentences (seconds)": "Пауза между репликами разных дикторов (сек)",
    "Perturbation": "Возмущение (Perturbation)",
    "Perturbation Layers": "Слои возмущения",
    "Phases": "Фазы",
    "Pose": "Поза",
    "Positions of Injected Frames (1=first, L=window end, X=skip window; no position for other Image Refs)": "Позиции внедрённых кадров (1=первый, L=конец окна, X=пропустить окно; для других референсов позиция не указывается)",
    "Preview": "Предпросмотр",
    "RIFLEx positional embedding to generate long video": "Позиционные эмбеддинги RIFLEx для генерации длинного видео",
    "Remove Background Music / Noise": "Убрать фоновую музыку / шум",
    "Remux Audio": "Ремукс аудио",
    "Rescale Internaly Image Ref (% in relation to Output Video) to change Output Composition": "Внутреннее масштабирование референсного изображения (% от результата), меняет композицию кадра",
    "Resolution Budget (Pixels will be reallocated to preserve Inputs W/H ratio)": "Бюджет разрешения (пиксели перераспределятся для сохранения пропорций входа)",
    "Sampler Solver / Scheduler": "Сэмплер / планировщик (Scheduler)",
    "Seed (-1 for random)": "Seed (-1 — случайное значение)",
    "Self Refiner": "Само-рефайнер",
    "Skip Steps Cache Type": "Тип кэша пропуска шагов",
    "Skip Steps starting moment in % of generation": "Момент начала пропуска шагов (% генерации)",
    "Speakers Locations separated by a Space. Each Location = Left:Right or a BBox Left:Top:Right:Bottom": "Расположение дикторов через пробел. Формат: Лево:Право или рамка Лево:Верх:Право:Низ",
    "Start - End": "Начало — конец",
    "Start / Reference Images": "Стартовые / референсные изображения",
    "Start Image": "Стартовое изображение",
    "Start-End": "Начало-конец",
    "Step Range": "Диапазон шагов",
    "Think": "Думать",
    "To Audio Source": "В источник аудио",
    "To Audio Source 2": "В источник аудио 2",
    "To Control Image": "В контрольное изображение",
    "To Control Video": "В контрольное видео",
    "To End Image": "В конечное изображение",
    "To Mask Image": "В маску изображения",
    "To Reference Image": "В референсное изображение",
    "To Soundtrack": "В саундтрек",
    "To Start Image": "В стартовое изображение",
    "To Video Source": "В источник видео",
    "Truncate Video beyond this number of resampled Frames (empty=Keep All, negative truncates from End)": "Обрезать видео после этого числа кадров (пусто=оставить все, отрицательное — с конца)",
    "Uncertainty Threshold": "Порог неопределённости",
    "Video Length": "Длина видео",
    "Video Mask": "Маска видео",
    "Video Mask Area (for Inpainting, white = Control Area, black = Unchanged)": "Область маски видео (для инпейнтинга: белое = зона правки, чёрное = без изменений)",
    "Voice to follow": "Голос для повторения",
    "Voice to follow #2": "Голос для повторения №2",
    "Enable Spatial Outpainting on Control Video, Landscape or Positioned Reference Frames": "Включить пространственный аутпейнтинг для контрольного видео, ландшафтных или позиционированных референсных кадров",
    "Top %": "Сверху %",
    "Bottom %": "Снизу %",
    "Left %": "Слева %",
    "Right %": "Справа %",
    "Reference Images": "Референсные изображения",
    "Input Video Strength": "Сила входного видео",
    "Audio Option": "Настройка аудио",
    "➕ Add": "➕ Добавить",
    "Enhance Prompt using a LLM": "Улучшить промпт через LLM",
    "Based on Text Prompt (No Images Selected)": "На основе текстового промпта (без изображений)",
    "Based on Text Prompt and Images": "На основе текста и изображений",
    "Based on Text Prompt Content": "На основе содержимого текстового промпта",
    "End Images": "Конечные изображения",
    "Injected Frames": "Внедрённые кадры",
    "Main Ref. Image": "Основное реф. изображение",
    "Ref. Images": "Реф. изображения",
    "Ref Image": "Реф. изображение",
    "Aligned to the beginning of the First Window of the new Video Sample": "Выровнено по началу первого окна нового видео",
    "Aligned to the beginning of the Source Video": "Выровнено по началу исходного видео",
    "Always OFF": "Всегда выкл.",
    "Always ON": "Всегда вкл.",
    "Applying Audio Post Processing": "Применяется постобработка звука…",
    "Applying Audio Remuxing": "Применяется ремукс аудио…",
    "Applying Media Post Processing": "Применяется постобработка медиа…",
    "Auto (ON if Video longer than 5s)": "Авто (вкл., если видео длиннее 5с)",
    "Auto fps: Control Video if any, or Model Default": "Авто fps: как у контрольного видео, иначе по умолчанию модели",
    "Auto fps: Source Video if any, or Control Video if any, or Model Default": "Авто fps: как у исходного видео, иначе как у контрольного, иначе по умолчанию модели",
    "Auto fps: Source Video if any, or Model Default": "Авто fps: как у исходного видео, иначе по умолчанию модели",
    "Auto: Best available (sage2 > sage > sdpa)": "Авто: лучший доступный (sage2 > sage > sdpa)",
    "Control Length": "Длина по контролю",
    "Control Video fps": "FPS контрольного видео",
    "Default Attention Mode": "Attention-режим по умолчанию",
    "Disabled": "Отключено",
    "Enabled with P1-Norm": "Включено с P1-Norm",
    "Enabled with P2-Norm": "Включено с P2-Norm",
    "First Block Cache": "Кэш первого блока",
    "Fit into a 16:9 Box": "Вписать в рамку 16:9",
    "Fit into a 1:1 Box": "Вписать в рамку 1:1",
    "Fit into a 21:9 Box": "Вписать в рамку 21:9",
    "Fit into a 3:4 Box": "Вписать в рамку 3:4",
    "Fit into a 4:3 Box": "Вписать в рамку 4:3",
    "Fit into a 9:16 Box": "Вписать в рамку 9:16",
    "Fit into a 9:21 Box": "Вписать в рамку 9:21",
    "Generate every combination of images and texts": "Сгенерировать все комбинации изображений и текстов",
    "Generating...": "Генерация…",
    "Keep Backgrounds behind all Reference Images": "Сохранить фон за всеми референсными изображениями",
    "Manual Expansion": "Ручное расширение",
    "Match images and text prompts": "Сопоставить изображения и текстовые промпты",
    "None": "Нет",
    "Nothing": "Ничего",
    "OFF": "Выкл.",
    "ON": "Вкл.",
    "One Phase": "Одна фаза",
    "Two Phases": "Две фазы",
    "Two Phases with Tiling": "Две фазы с тайлингом",
    "Three Phases": "Три фазы",
    "People / Objects": "Люди / объекты",
    "Phase 1-2 transition": "Переход фаза 1→2",
    "Phase 2-3 transition": "Переход фаза 2→3",
    "Please enter a name for a Lora Preset / Settings file": "Введите название пресета LoRA / файла настроек",
    "Profile 1, HighRAM_HighVRAM: at least 64 GB of RAM and 24 GB of VRAM, the fastest for short videos with a RTX 3090 / RTX 4090": "Профиль 1, HighRAM_HighVRAM: минимум 64 ГБ RAM и 24 ГБ VRAM — самый быстрый для коротких видео на RTX 3090 / RTX 4090",
    "Profile 3+, VeryLowRAM_HighVRAM: at least 32 GB of RAM and 24 GB of VRAM, variant of Profile 3 that won't used Reserved Memory to reduce RAM usage": "Профиль 3+, VeryLowRAM_HighVRAM: минимум 32 ГБ RAM и 24 ГБ VRAM — вариант профиля 3 без резервируемой памяти для снижения расхода RAM",
    "Profile 3, LowRAM_HighVRAM: at least 32 GB of RAM and 24 GB of VRAM, adapted for RTX 3090 / RTX 4090 with limited RAM for good speed short video": "Профиль 3, LowRAM_HighVRAM: минимум 32 ГБ RAM и 24 ГБ VRAM — для RTX 3090/4090 с ограниченной RAM, хорошая скорость на коротких видео",
    "Profile 4+, LowRAM_LowVRAM+: at least 32 GB of RAM and 12 GB of VRAM, variant of Profile 4, slightly slower but needs less VRAM": "Профиль 4+, LowRAM_LowVRAM+: минимум 32 ГБ RAM и 12 ГБ VRAM — вариант профиля 4, чуть медленнее, но нужно меньше VRAM",
    "Profile 4, LowRAM_LowVRAM (Recommended): at least 32 GB of RAM and 12 GB of VRAM, if you have little VRAM or want to generate longer videos": "Профиль 4, LowRAM_LowVRAM (рекомендуется): минимум 32 ГБ RAM и 12 ГБ VRAM — если мало VRAM или нужны более длинные видео",
    "Profile 5, VerylowRAM_LowVRAM (Fail safe): at least 24 GB of RAM and 10 GB of VRAM, if you don't have much it won't be fast but maybe it will work": "Профиль 5, VerylowRAM_LowVRAM (аварийный): минимум 24 ГБ RAM и 10 ГБ VRAM — если совсем мало ресурсов, будет медленно, но может заработать",
    "Save All the Settings except Media": "Сохранить все настройки, кроме медиа",
    "Save All the Settings including Media": "Сохранить все настройки, включая медиа",
    "Save Loras & Only Prompt Comments": "Сохранить LoRA и только комментарии промпта",
    "Save Only Loras & Full Prompt": "Сохранить только LoRA и полный промпт",
    "Shortest generation, keep only the First Frame": "Кратчайшая генерация, оставить только первый кадр",
    "Skip Layer Guidance": "Пропуск наведения по слоям (Skip Layer Guidance)",
    "Source Video fps": "FPS исходного видео",
    "Start": "Начало",
    "around x1.5 speed up": "ускорение примерно x1.5",
    "around x1.75 speed up": "ускорение примерно x1.75",
    "around x2 speed up": "ускорение примерно x2",
    "around x2.25 speed up": "ускорение примерно x2.25",
    "around x2.5 speed up": "ускорение примерно x2.5",
    "sdpa: Default, always available": "sdpa: по умолчанию, всегда доступен",
    "start image": "стартовое изображение",
    "Top x": "Сверху x",
    "Bottom x": "Снизу x",
    "Left x": "Слева x",
    "Right x": "Справа x",
    "Num. of Generated Audio Files per Prompt": "Кол-во аудиофайлов на промпт",
    "Num. of Generated Videos per Prompt": "Кол-во видео на промпт",
    "Override Memory Profile": "Переопределить профиль памяти",
    "Override Attention Mode": "Переопределить режим внимания (Attention Mode)",
    "Video": "Видео",
    "Prompts (all the Lines are Parts of the Same Prompt, # lines = comments, ! lines = macros)": "Промпты (все строки — части одного промпта, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (all the Lines are Parts of the Same Prompt, # lines = comments)": "Промпты (все строки — части одного промпта, строки с # — комментарии)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will be used for a Sliding Window, # lines = comments, ! lines = macros)": "Промпты (каждый абзац промпта, разделённый пустой строкой, будет использован для скользящего окна (Sliding Window), строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will be used for a Sliding Window, # lines = comments)": "Промпты (каждый абзац промпта, разделённый пустой строкой, будет использован для скользящего окна (Sliding Window), строки с # — комментарии)",
    "Prompts (each Line of Prompt will be used for a Sliding Window, # lines = comments, ! lines = macros)": "Промпты (каждая строка промпта будет использована для скользящего окна (Sliding Window), строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Line of Prompt will be used for a Sliding Window, # lines = comments)": "Промпты (каждая строка промпта будет использована для скользящего окна (Sliding Window), строки с # — комментарии)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will generate a new Image, # lines = comments, ! lines = macros)": "Промпты (каждый абзац промпта, разделённый пустой строкой, создаст новое изображение, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will generate a new Image, # lines = comments)": "Промпты (каждый абзац промпта, разделённый пустой строкой, создаст новое изображение, строки с # — комментарии)",
    "Prompts (each Line of Prompt will generate a new Image, # lines = comments, ! lines = macros)": "Промпты (каждая строка промпта создаст новое изображение, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Line of Prompt will generate a new Image, # lines = comments)": "Промпты (каждая строка промпта создаст новое изображение, строки с # — комментарии)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will generate a new Audio File, # lines = comments, ! lines = macros)": "Промпты (каждый абзац промпта, разделённый пустой строкой, создаст новое аудио, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will generate a new Audio File, # lines = comments)": "Промпты (каждый абзац промпта, разделённый пустой строкой, создаст новое аудио, строки с # — комментарии)",
    "Prompts (each Line of Prompt will generate a new Audio File, # lines = comments, ! lines = macros)": "Промпты (каждая строка промпта создаст новое аудио, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Line of Prompt will generate a new Audio File, # lines = comments)": "Промпты (каждая строка промпта создаст новое аудио, строки с # — комментарии)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will generate a new Video, # lines = comments, ! lines = macros)": "Промпты (каждый абзац промпта, разделённый пустой строкой, создаст новое видео, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Paragraph of Prompt separated by an Empty Line will generate a new Video, # lines = comments)": "Промпты (каждый абзац промпта, разделённый пустой строкой, создаст новое видео, строки с # — комментарии)",
    "Prompts (each Line of Prompt will generate a new Video, # lines = comments, ! lines = macros)": "Промпты (каждая строка промпта создаст новое видео, строки с # — комментарии, строки с ! — макросы)",
    "Prompts (each Line of Prompt will generate a new Video, # lines = comments)": "Промпты (каждая строка промпта создаст новое видео, строки с # — комментарии)",
  };

  // Подписи с "живыми" цифрами (длительность, fps) — точным совпадением не поймать,
  // переводим по regex, сохраняя захваченные числа как есть.
  var REGEX_MAP = [
    {
      re: /^Number of frames \((\d+) frames = 1s\), current duration: ([\d.]+)s$/,
      to: function (m) {
        return "Количество кадров (" + m[1] + " кадров = 1с), текущая длительность: " + m[2] + "с";
      },
    },
    {
      re: /^Override Frames Per Second \(model default=(\d+) fps\)$/,
      to: function (m) {
        return "Переопределить FPS (по умолчанию модели: " + m[1] + " fps)";
      },
    },
  ];

  // Фильтр семейств моделей рендерится как HTML-иконки: видимого текста нет,
  // текст живёт только в title/aria-label. Ключ — стабильный data-model-output-filter.
  var FAMILY_FILTER_TITLES = {
    all: "Все семейства моделей — показать полный список без фильтра.",
    video: "Видео-модели — генерация видео (текст в видео, изображение в видео и т.д.), включая Wan2.1/2.2.",
    image: "Модели изображений — создают только картинки, без видео.",
    audio: "Аудио-модели — генерация и обработка звука/озвучки, без видео.",
  };

  // Иконки-инструменты рядом с выбором модели (⌕ + ↻ ⏏) — тоже стабильные elem_id.
  var TOOL_TITLES = {
    wangp_model_tool_search: "Поиск моделей по названию",
    wangp_model_tool_finetune: "Создать свою модель (файнтюн) на основе текущей",
    wangp_model_tool_refresh: "Обновить список моделей",
    wangp_model_tool_unload: "Выгрузить модель из памяти GPU",
  };

  var GUIDE_HTML =
    '<b>Как выбрать модель:</b> слева — семейство (например, Wan2.1/2.2), справа — конкретная версия ' +
    "(размер вроде 14B/5B, тип T2V/I2V и т.д.). Чем больше цифра — тем выше качество, но дольше генерация " +
    "и больше нужно видеопамяти. Наведи курсор на цветные иконки слева, чтобы увидеть подсказки по фильтру.";

  var WORKFLOW_GUIDE_HTML =
    "<b>Как сделать видео — выбери один из режимов ниже:</b><br>" +
    "• <b>Из текста:</b> оставь «Новое видео», убедись что открыта вкладка «Текст в видео», впиши описание в поле промпта ниже и нажми «Сгенерировать».<br>" +
    "• <b>Из картинки:</b> выбери «Начать с изображения» (появляется, если модель это умеет) и загрузи картинку — из неё оживёт видео.<br>" +
    "• <b>Продолжить готовое видео:</b> «Продолжить видео» — загрузить своё видео и продлить его; «Продолжить последнее видео» — продолжить то, что уже сгенерировано здесь.";

  function translateFamilyFilter(root) {
    var buttons = root.querySelectorAll("#wangp_model_output_filter button[data-model-output-filter]");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var key = btn.getAttribute("data-model-output-filter");
      var ruTitle = FAMILY_FILTER_TITLES[key];
      if (ruTitle) {
        btn.title = ruTitle;
        btn.setAttribute("aria-label", ruTitle);
      }
    }
  }

  function translateToolIcons(root) {
    for (var id in TOOL_TITLES) {
      var el = root.getElementById ? root.getElementById(id) : document.getElementById(id);
      if (el) {
        el.title = TOOL_TITLES[id];
        el.setAttribute("aria-label", TOOL_TITLES[id]);
      }
    }
  }

  function translateTabs(root) {
    var tabs = root.querySelectorAll("[data-tab-id]");
    for (var i = 0; i < tabs.length; i++) {
      var el = tabs[i];
      var id = el.getAttribute("data-tab-id");
      var ruLabel = TAB_LABELS[id];
      if (!ruLabel) continue;
      if (!el.dataset.ruOriginal) el.dataset.ruOriginal = el.textContent.trim();
      if (el.textContent.trim() === el.dataset.ruOriginal && el.dataset.ruOriginal !== ruLabel) {
        el.textContent = ruLabel;
      }
    }
  }

  function translateText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    var nodes = [];
    while ((node = walker.nextNode())) nodes.push(node);
    for (var i = 0; i < nodes.length; i++) {
      var tn = nodes[i];
      var trimmed = tn.nodeValue.trim();
      if (!trimmed) continue;
      if (TEXT_MAP.hasOwnProperty(trimmed)) {
        tn.nodeValue = tn.nodeValue.replace(trimmed, TEXT_MAP[trimmed]);
        continue;
      }
      for (var r = 0; r < REGEX_MAP.length; r++) {
        var rule = REGEX_MAP[r];
        var match = trimmed.match(rule.re);
        if (match) {
          tn.nodeValue = tn.nodeValue.replace(trimmed, rule.to(match));
          break;
        }
      }
    }
  }

  function insertGuide(root) {
    if (root.querySelector(".ru-model-guide")) return;
    var filterBlock = document.getElementById("wangp_model_output_filter");
    if (!filterBlock) return;
    var rowAncestor = filterBlock.closest(".row") || filterBlock.parentElement;
    if (!rowAncestor || !rowAncestor.parentElement) return;
    var box = document.createElement("div");
    box.className = "ru-model-guide";
    box.innerHTML = GUIDE_HTML;
    rowAncestor.parentElement.insertBefore(box, rowAncestor.nextSibling);
  }

  function insertWorkflowGuide(root) {
    var labels = root.querySelectorAll('[data-testid="New Video-radio-label"]');
    for (var i = 0; i < labels.length; i++) {
      var block = labels[i].closest(".block");
      if (!block || !block.parentElement) continue;
      if (block.parentElement.querySelector(":scope > .ru-workflow-guide")) continue;
      var box = document.createElement("div");
      box.className = "ru-workflow-guide";
      box.innerHTML = WORKFLOW_GUIDE_HTML;
      block.parentElement.insertBefore(box, block.nextSibling);
    }
  }

  function runPass() {
    translateTabs(document.body);
    translateText(document.body);
    translateFamilyFilter(document.body);
    translateToolIcons(document.body);
    insertGuide(document.body);
    insertWorkflowGuide(document.body);
  }

  var debounceTimer = null;
  var observer = new MutationObserver(function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runPass, 150);
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });

  var attempts = 0;
  var bootstrap = setInterval(function () {
    runPass();
    attempts += 1;
    if (attempts > 20) clearInterval(bootstrap);
  }, 500);
})();
