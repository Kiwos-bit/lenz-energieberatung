
# Domain-Verbindung: Wix zu Vercel

Es gibt zwei Möglichkeiten, Ihre Domain mit Vercel zu nutzen:
1. **Option A: Pointing (Empfohlen)** – Die Domain bleibt bei Wix, wird aber auf Vercel "umgeleitet". (Schnell, kostenlos, einfach).
2. **Option B: Transfer (Mit Ihrem Code)** – Die gesamte Verwaltung und Abrechnung der Domain zieht zu Vercel um. (Dauert 5-7 Tage, kostet die jährliche Gebühr bei Vercel).

---

## Option A: Pointing (DNS-Umleitung)
> *Diese Methode ist am schnellsten (ca. 10 Min. bis alles funktioniert).*

## 1. Domain in Vercel hinzufügen
1. Loggen Sie sich in Ihr **Vercel Dashboard** ein.
2. Wählen Sie Ihr Projekt `lenz-energieberatung` aus.
3. Gehen Sie auf den Tab **Settings** (oben) und dann links auf **Domains**.
4. Geben Sie Ihre Domain ein (z. B. `lenz-energieberatung.com`) und klicken Sie auf **Add**.
5. Vercel wird Ihnen nun die benötigten DNS-Werte anzeigen (A-Record und CNAME).

## 2. DNS-Einstellungen bei Wix konfigurieren
1. Loggen Sie sich in Ihr **Wix-Konto** ein.
2. Navigieren Sie zu **Domains** (oft unter "Zahlung & Abos" oder direkt im Hauptmenü).
3. Klicken Sie auf das Drei-Punkt-Menü neben Ihrer Domain und wählen Sie **DNS-Einträge verwalten**.
4. **WICHTIG**: Ändern Sie dort die folgenden Einträge:

### A-Record (für die Haupt-Domain)
- **Host**: Leer lassen (oder `@`)
- **Points to**: Die IP-Adresse, die Vercel Ihnen anzeigt (meist `76.76.21.21`)
- **TTL**: Standard lassen

### CNAME-Record (für die `www` Subdomain)
- **Host**: `www`
- **Points to**: `cname.vercel-dns.com`

## 3. Verifizierung & Propagation
- Sobald Sie die Daten bei Wix gespeichert haben, kehren Sie zum Vercel Dashboard zurück.
- Vercel wird automatisch versuchen, die Verbindung zu verifizieren.
- **Hinweis**: Es kann zwischen 10 Minuten und 48 Stunden dauern, bis die DNS-Änderungen weltweit aktiv sind (Propagation).

### "Nicht sicher"-Warnung in Chrome?
Keine Sorge, das ist völlig normal! Vercel erstellt automatisch ein SSL-Zertifikat (für HTTPS), sobald die DNS-Einträge korrekt auf Vercel zeigen. 
1. **Status prüfen**: Im Vercel Dashboard unter *Settings > Domains* sehen Sie den Status "Generating SSL Certificate".
2. **Geduld**: Dieser Prozess dauert meist 10-20 Minuten, nachdem die DNS-Werte bei Wix gespeichert wurden.
3. Danach verschwindet die Warnung und das Schloss-Symbol erscheint automatisch.

---

## Option B: Domain-Transfer (Vollständiger Umzug)
> *Nutzen Sie diese Methode, wenn Sie Wix komplett verlassen und die Domain zukünftig über Vercel bezahlen möchten.*

1. Loggen Sie sich in Ihr **Vercel Dashboard** ein.
2. Gehen Sie auf Ihr Profilbild (oben rechts) > **Settings** > **Domains**.
3. Klicken Sie auf den Button **Transfer In**.
4. Geben Sie Ihren Domainnamen ein (z. B. `lenz-energieberatung.com`).
5. Vercel fragt Sie nun nach dem **Authorization Code** (EPP-Code), den Sie von Wix erhalten haben. Geben Sie diesen dort ein.
6. Folgen Sie den Zahlungsanweisungen (meist wird ein Jahr Laufzeit im Voraus berechnet).

**Hinweise zum Transfer:**
- **Dauer**: Ein Transfer kann **5 bis 7 Tage** dauern. Währenddessen ist die Seite evtl. kurzzeitig nicht erreichbar.
- **.de Domains**: Vercel unterstützt aktuell nicht alle Endungen für den direkten Transfer (insb. manche Länder-Endungen wie .de). Falls Vercel bei der Eingabe eine Fehlermeldung zeigt, nutzen Sie bitte **Option A (Pointing)**.
