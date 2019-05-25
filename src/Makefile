# Makefile

DIST_FILE = tb-upgrade-test.xpi
CHROME = ./chrome
EXCLUDE = \*~ \*.bak

$(DIST_FILE): $(CHROME)/tb-upgrade.jar install.rdf
	[ ! -f chrome.manifest.devel ] && mv -v chrome.manifest chrome.manifest.devel && cp -v chrome.manifest.release chrome.manifest
	zip $(DIST_FILE) $(CHROME)/tb-upgrade.jar install.rdf chrome.manifest

$(CHROME)/tb-upgrade.jar:
	cd $(CHROME); zip -r tb-upgrade.jar * -x $(EXCLUDE)

clean:
	rm -fv ./$(DIST_FILE) $(CHROME)/tb-upgrade.jar
	[ -f chrome.manifest.devel ] && rm -v chrome.manifest && mv -v chrome.manifest.devel chrome.manifest

# END Makefile
