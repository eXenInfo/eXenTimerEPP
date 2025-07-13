# eXen-Timer

Ein einfacher, aber leistungsstarker Timer für dynamische Schießdisziplinen, entwickelt als Progressive Web App (PWA) für maximale Zuverlässigkeit und Offline-Fähigkeit. Dieses Projekt wurde von Thomas Köhler - eXen.Info mit Unterstützung von Google Gemini erstellt.

## Live-Demo

**Hier Link zur Live-Demo einfügen:** [https://eXenInfo.github.io/exen-timer/](https://eXenInfo.github.io/exen-timer/)

---

## Features

* **Progressive Web App (PWA):** Kann direkt zum Startbildschirm deines Smartphones oder Desktops hinzugefügt werden und verhält sich wie eine native App.
* **100% Offline-fähig:** Nach dem ersten Besuch funktioniert die App zuverlässig ohne Internetverbindung – perfekt für den Einsatz auf dem Schießstand.
* **Umfassender Disziplin-Editor:** Erstelle, bearbeite, dupliziere und lösche einzelne Phasen oder ganze Disziplinen.
* **Timer-Ansicht:** Eine aufgeräumte und einfach zu bedienende Oberfläche für die Durchführung der Abläufe am Schießstand.
* **Teilen & Sichern:** Einfaches Teilen von einzelnen Disziplinen oder der gesamten Sammlung über die Zwischenablage (Kopieren & Einfügen).
* **Anpassbar:** Die App kommt mit einer Reihe von vordefinierten BDMP-Disziplinen, die als Vorlage für eigene Kreationen dienen können.

## Projektstruktur

Das Projekt ist sauber in die notwendigen Dateien für eine PWA aufgeteilt:

```
/
|-- index.html          # Das Haupt-HTML-Gerüst der App
|-- style.css           # Zusätzliche CSS-Stile (falls benötigt)
|-- script.js           # Die gesamte Anwendungslogik
|-- manifest.json       # Konfigurationsdatei für die PWA
|-- sw.js               # Der Service Worker für die Offline-Funktionalität
|-- icons/              # Ordner für die App-Icons
    |-- icon-192.png
    |-- icon-512.png
```

## Installation & Nutzung

1.  **Repository klonen oder herunterladen:**
    ```bash
    git clone [https://github.com/DEIN-GITHUB-NAME/exen-timer.git](https://github.com/DEIN-GITHUB-NAME/exen-timer.git)
    ```
2.  **Icons ersetzen (Optional):** Ersetze die Platzhalter-Icons im `icons/`-Ordner durch deine eigenen Grafiken (192x192 und 512x512 Pixel).
3.  **Live-Schalten:** Lade den gesamten Projektordner auf einen Webspace oder nutze GitHub Pages, um die App zu veröffentlichen.

## Bedienung

### Timer-Ansicht

* **Disziplin laden:** Wähle im Admin-Bereich eine Disziplin aus und klicke auf "Laden".
* **Starten:** Klicke auf "Start", um den Ablauf zu beginnen.
* **Einzelne Phasen trainieren:** Klicke auf das Play-Symbol (▶) neben einer Phase in der Liste, um sie gezielt zu starten.

### Admin-Ansicht

* **Bearbeiten:** Wähle eine Disziplin aus der Liste, um sie im Editor zu bearbeiten.
* **Speichern:** Speichere deine Änderungen unter demselben oder einem neuen Namen.
* **Teilen:** Nutze die "Kopieren"-Buttons, um Disziplinen in die Zwischenablage zu legen und sie über beliebige Text-Apps zu teilen.
* **Importieren:** Füge kopierte Disziplin-Daten über "Aus Text einfügen" zu deiner Sammlung hinzu.

## Danksagung

* **Entwickler:** Thomas Köhler - [eXen.Info](https://exen.info/)
* Dieses Projekt wurde mit wesentlicher Unterstützung durch **Google Gemini** realisiert.
