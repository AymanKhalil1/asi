// els-qsg.js - JavaScript for ELS Quick Start Guide navigation, sidebar, modals, and UI behaviors

document.addEventListener("DOMContentLoaded", function () {
	// Handle interface modal
	const interfaceButton = document.querySelector(
		'[data-bs-target="#interfaceModal"]'
	);
	if (interfaceButton) {
		interfaceButton.addEventListener("click", function () {
			fetch("modals/interface-modal.html")
				.then((response) => response.text())
				.then((html) => {
					document.querySelector("#interfaceModal .modal-body").innerHTML =
						html;
				})
				.catch((error) => {
					console.error("Error loading interface modal content:", error);
				});
		});
	}

	// Handle properties browser modal
	const propertiesButton = document.querySelector(
		'[data-bs-target="#secondModal"]'
	);
	if (propertiesButton) {
		propertiesButton.addEventListener("click", function () {
			fetch("modals/properties-browser-modal.html")
				.then((response) => response.text())
				.then((html) => {
					document.querySelector("#secondModal .modal-body").innerHTML = html;
				})
				.catch((error) => {
					console.error(
						"Error loading properties browser modal content:",
						error
					);
				});
		});
	}

	// Handle divide with multiple planes modal
	const divideButton = document.querySelector(
		'[data-bs-target="#divideModal"]'
	);
	if (divideButton) {
		divideButton.addEventListener("click", function () {
			fetch("modals/divide-with-multiple-planes-modal.html")
				.then((response) => response.text())
				.then((html) => {
					document.querySelector("#divideModal .modal-body").innerHTML = html;
				})
				.catch((error) => {
					console.error("Error loading divide modal content:", error);
				});
		});
	}

	// Handle copy groups modal
	const copyGroupsButton = document.querySelector(
		'[data-bs-target="#copyGroupsModal"]'
	);
	if (copyGroupsButton) {
		copyGroupsButton.addEventListener("click", function () {
			fetch("modals/copy-groups-modal.html")
				.then((response) => response.text())
				.then((html) => {
					document.querySelector("#copyGroupsModal .modal-body").innerHTML =
						html;
				})
				.catch((error) => {
					console.error("Error loading copy groups modal content:", error);
				});
		});
	}

	// Load Boundary Conditions Modal Content
	const boundaryConditionsModal = document.getElementById(
		"boundaryConditionsModal"
	);
	if (boundaryConditionsModal) {
		boundaryConditionsModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/boundary-conditons-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle append elements modal
	const appendElementsButton = document.querySelector(
		'[data-bs-target="#appendElementsModal"]'
	);
	if (appendElementsButton) {
		appendElementsButton.addEventListener("click", function () {
			fetch("modals/append-elements-modal.html")
				.then((response) => response.text())
				.then((html) => {
					document.querySelector("#appendElementsModal .modal-body").innerHTML =
						html;
				})
				.catch((error) => {
					console.error("Error loading append elements modal content:", error);
				});
		});
	}

	// Handle anisotropic materials modal
	const anisotropicMaterialsModal = document.getElementById(
		"anisotropicMaterialsModal"
	);
	if (anisotropicMaterialsModal) {
		anisotropicMaterialsModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/anisotropic-materials-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle create link member modal
	const createLinkMemberModal = document.getElementById(
		"createLinkMemberModal"
	);
	if (createLinkMemberModal) {
		createLinkMemberModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/create-link-member-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle create region on segments modal
	const createRegionOnSegmentsModal = document.getElementById(
		"createRegionOnSegmentsModal"
	);
	if (createRegionOnSegmentsModal) {
		createRegionOnSegmentsModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/create-region-on-segments-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle custom groups modal
	const customGroupsModal = document.getElementById("customGroupsModal");
	if (customGroupsModal) {
		customGroupsModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/custom-groups-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle dowel action modal
	const dowelActionModal = document.getElementById("dowelActionModal");
	if (dowelActionModal) {
		dowelActionModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/dowel-action-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle equations modal
	const equationsModal = document.getElementById("equationsModal");
	if (equationsModal) {
		equationsModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/equations-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle import materials and styles modal
	const importMaterialsStylesModal = document.getElementById(
		"importMaterialsStylesModal"
	);
	if (importMaterialsStylesModal) {
		importMaterialsStylesModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/import-materials-and-styles-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle object local axes modal
	const objectLocalAxesModal = document.getElementById("objectLocalAxesModal");
	if (objectLocalAxesModal) {
		objectLocalAxesModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/object-local-axes-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle replace interface id modal
	const replaceInterfaceIdModal = document.getElementById(
		"replaceInterfaceIdModal"
	);
	if (replaceInterfaceIdModal) {
		replaceInterfaceIdModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/replace-interface-id-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle replace spring material modal
	const replaceSpringMaterialModal = document.getElementById(
		"replaceSpringMaterialModal"
	);
	if (replaceSpringMaterialModal) {
		replaceSpringMaterialModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/replace-spring-material-by-location-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle style collection properties modal
	const styleCollectionPropertiesModal = document.getElementById(
		"styleCollectionPropertiesModal"
	);
	if (styleCollectionPropertiesModal) {
		styleCollectionPropertiesModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/style-collection-properties-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle sync forces modal
	const syncForcesModal = document.getElementById("syncForcesModal");
	if (syncForcesModal) {
		syncForcesModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/sync-forces-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Handle velocity vector scale modal
	const velocityVectorScaleModal = document.getElementById(
		"velocityVectorScaleModal"
	);
	if (velocityVectorScaleModal) {
		velocityVectorScaleModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/velocity-vector-scale-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle wall stirrup extensions modal
	const wallStirrupExtensionsModal = document.getElementById(
		"wallStirrupExtensionsModal"
	);
	if (wallStirrupExtensionsModal) {
		wallStirrupExtensionsModal.addEventListener(
			"show.bs.modal",
			function (event) {
				const modalBody = this.querySelector(".modal-body");
				fetch("modals/wall-stirrup-extensions-modal.html")
					.then((response) => response.text())
					.then((data) => {
						modalBody.innerHTML = data;
					})
					.catch((error) => {
						console.error("Error loading modal content:", error);
						modalBody.innerHTML = "<p>Error loading content.</p>";
					});
			}
		);
	}

	// Handle Other Utilities Modal
	const otherUtilitiesModal = document.getElementById("otherUtilitiesModal");
	if (otherUtilitiesModal) {
		otherUtilitiesModal.addEventListener("show.bs.modal", function (event) {
			const modalBody = this.querySelector(".modal-body");
			fetch("modals/other-utilities-modal.html")
				.then((response) => response.text())
				.then((data) => {
					modalBody.innerHTML = data;
				})
				.catch((error) => {
					console.error("Error loading modal content:", error);
					modalBody.innerHTML = "<p>Error loading content.</p>";
				});
		});
	}

	// Sidebar toggle button fade in/out on offcanvas show/hide
	const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
	const offcanvasNav = document.getElementById("offcanvas-navigation");
	if (sidebarToggleBtn && offcanvasNav) {
		offcanvasNav.addEventListener("show.bs.offcanvas", function () {
			sidebarToggleBtn.classList.add("hide-btn");
		});
		offcanvasNav.addEventListener("hidden.bs.offcanvas", function () {
			sidebarToggleBtn.classList.remove("hide-btn");
		});
	}

	// Highlight nav link on card hover
	document.querySelectorAll(".card[data-nav]").forEach(function (card) {
		card.addEventListener("mouseenter", function () {
			// Remove .nav-link-hover from all nav links
			document
				.querySelectorAll("#scrollspyMenu .nav-link")
				.forEach(function (link) {
					link.classList.remove("nav-link-hover");
				});
			// Add .nav-link-hover to the corresponding nav link
			var navSelector = this.getAttribute("data-nav");
			var navLink = document.querySelector(
				'#scrollspyMenu .nav-link[href="' + navSelector + '"]'
			);
			if (navLink) navLink.classList.add("nav-link-hover");
		});
		card.addEventListener("mouseleave", function () {
			// Remove .nav-link-hover from all nav links
			document
				.querySelectorAll("#scrollspyMenu .nav-link")
				.forEach(function (link) {
					link.classList.remove("nav-link-hover");
				});
		});
	});
});
