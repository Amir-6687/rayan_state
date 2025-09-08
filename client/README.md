# React Real Estate UI Design

---

---

```markdown
# 🏠 Amir Real Estate App

Ein Full-Stack-Projekt für die Verwaltung und Anzeige von Immobilienanzeigen mit Chat- und Benachrichtigungsfunktion zwischen den Nutzern.

---

## ✨ Hauptfunktionen

- **Benutzerregistrierung und Login (Authentifizierung)**
- **Erstellen, Bearbeiten und Löschen von Immobilienanzeigen**
- **Speichern und Anzeigen von Favoritenlisten (Saved List)**
- **Echtzeit-Chat zwischen Nutzern (Socket.io)**
- **Benachrichtigungen (Notification) für ungelesene Nachrichten**
- **Benutzerprofil und Bearbeitung der Profildaten**
- **Modernes, responsives UI mit React**

---

## 🛠️ Verwendete Technologien

### Backend

- **Node.js** + **Express**
- **Prisma ORM** (Anbindung an MongoDB Atlas)
- **Socket.io** (für Echtzeit-Chat)
- **JWT** (Authentifizierung)
- **bcryptjs** (Passwort-Hashing)
- **CORS, dotenv, ...**

### Frontend

- **React** (Vite)
- **Zustand** (State-Management für Benachrichtigungen)
- **Axios** (HTTP-Anfragen)
- **Sass** (Styling)
- **React Router**

---

## 📁 Projektstruktur
```

estateApp/
├── api/ # Backend (Node.js + Express + Prisma)
├── client/ # Frontend (React)
└── socket/ # Socket.io-Server für den Chat

```
<code_block_to_apply_changes_from>
```

DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<db>?retryWrites=true&w=majority"
JWT_SECRET="your_jwt_secret"

```

---

## 📝 Nutzung

- **Registrierung & Login:** Nutzer können sich registrieren und einloggen.
- **Anzeige erstellen:** Nach dem Login können neue Immobilienanzeigen erstellt werden.
- **Chat:** Über die Nachrichtenfunktion kann mit anderen Nutzern gechattet werden.
- **Benachrichtigung:** Die Anzahl ungelesener Nachrichten wird als Notification im Navbar angezeigt.
- **Profil:** Im Profil sind die eigenen Anzeigen und Favoriten sichtbar und bearbeitbar.

---

## 🧑‍💻 Entwickler

- **Amir Akbari**
- und weitere Mitwirkende...

---

## 🗂️ Hinweise für Entwickler

- **Modulare Struktur:** Jeder Bereich (auth, chat, post, user) ist als eigenes Modul umgesetzt.
- **Socket.io:** Für den Echtzeit-Chat mit zwei verschiedenen Nutzern in zwei Browser-Tabs oder -Fenstern einloggen.
- **Prisma:** Nach Änderungen am Datenmodell in `schema.prisma` immer `npx prisma generate` ausführen.
- **Notification:** Verwaltung der ungelesenen Nachrichten mit Zustand und eigenem API-Endpunkt.

---

## 📝 Lizenz

Dieses Projekt dient ausschließlich zu Lern- und Demonstrationszwecken.

---

## 📞 Kontakt

Bei Fragen oder Problemen:
- amir5@gmail.com

---

**Viel Erfolg und Spaß mit dem Projekt! 🚀**
```

---

اگر بخش خاصی را به آلمانی مفصل‌تر یا تخصصی‌تر خواستی، بگو تا ویرایش کنم!

---

## 🚀 Projekt starten

### 1. Projekt klonen

```bash
git clone <REPO_URL>
cd estateApp
```

### 2. Backend starten (api)

```bash
cd api
npm install
# .env-Datei mit MongoDB Atlas und JWT_SECRET anlegen
npx prisma generate
node app.js
```

### 3. Frontend starten (client)

```bash
cd ../client
npm install
npm run dev
```

### 4. Socket-Server starten

```bash
cd ../socket
npm install
node app.js
```

---

## ⚙️ Umgebungsvariablen

Im Ordner `api` eine `.env`-Datei anlegen:

```

```
