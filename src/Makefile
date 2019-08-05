# Makefile

VER = 1.0
DIST_FILE = tb-upgrade-test-$(VER).xpi
MANIFEST = install.rdf
MANIFEST_NEW = manifest.json
CHROME = ./chrome
EXCLUDE = \*~ \*.bak

$(DIST_FILE): $(CHROME)/tb-upgrade.jar $(MANIFEST)
	[ ! -f chrome.manifest.devel ] && mv -v chrome.manifest chrome.manifest.devel && cp -v chrome.manifest.release chrome.manifest
	zip $(DIST_FILE) $(CHROME)/tb-upgrade.jar $(MANIFEST) $(MANIFEST_NEW) chrome.manifest icon.png

$(CHROME)/tb-upgrade.jar:
	cd $(CHROME); zip -r tb-upgrade.jar * -x $(EXCLUDE)

clean:
	rm -fv ./$(DIST_FILE) $(CHROME)/tb-upgrade.jar
	[ -f chrome.manifest.devel ] && rm -v chrome.manifest && mv -v chrome.manifest.devel chrome.manifest

# END Makefile
