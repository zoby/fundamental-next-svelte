<script lang="ts">
	/**
	 * Set title value for byline list item
	 * @type {string}
	 */
	export let title: string = '';

	/**
	 * Set byline value for byline list item
	 * @type {string}
	 */
	export let byline: string = '';

	/**
	 * Set true to mark item as selected
	 * @type {boolean}
	 */
	export let selected: boolean = false;

	/**
	 * Set true to display list item as info item
	 * @type {boolean}
	 */
	export let info: boolean = false;

	/**
	 * Set true to disable item
	 * @type {boolean}
	 */
	export let disabled: boolean = false;

	/**
	 * Set true to mark item as read only
	 * @type {boolean}
	 */
	export let readonly: boolean = false;

	/**
	 * Text displayed at end of list item
	 * @type {boolean}
	 */
	export let endText: string;

	/**
	 * Set to display icon
	 * @type {"accelerated" | "accept" | "accidental-leave" | "account" | "accounting-document-verification" | "activity-individual" | "activity-items" | "add-activity" | "add-contact" | "add-folder" | "add-photo" | "add-process" | "add-product" | "add" | "address-book" | "appointment-2" | "appointment" | "approvals" | "area-chart" | "arobase" | "attachment-audio" | "attachment-epub" | "attachment-html" | "attachment-photo" | "attachment" | "background" | "badge" | "bar-chart" | "barcode" | "basket" | "bell" | "blank-tag-2" | "blank-tag" | "blur" | "bo-strategy-management" | "bubble-chart" | "building" | "bullet-text" | "burglary" | "bus-public-transport" | "business-one" | "busy" | "calendar" | "call" | "camera" | "card" | "cargo-train" | "cart-2" | "cart-3" | "cart" | "chain-link" | "chalkboard" | "chart-axis" | "chart-table-view" | "chart-tree-map" | "chevron-phase-2" | "chevron-phase" | "choropleth-chart" | "circle-task-2" | "circle-task" | "cloud" | "co" | "collaborate" | "collapse-all" | "collapse" | "column-chart-dual-axis" | "comment" | "commission-check" | "company-view" | "compare" | "copy" | "course-book" | "course-program" | "create 1" | "create" | "crm-service-manager" | "crop" | "crossed-line-chart" | "curriculum" | "cursor-arrow" | "customer-history" | "customer-order-entry" | "customer-view" | "customize" | "database" | "desktop-mobile" | "detail-view" | "developer-settings" | "dimension" | "disconnected" | "doc-attachment" | "doctor" | "document-text" | "document" | "documents" | "drill-down" | "drill-up" | "drop-down-list" | "dropdown" | "duplicate" | "education" | "electrocardiogram" | "electronic-medical-record" | "email-read" | "email" | "end-user-experience-monitoring" | "endoscopy" | "energy-saving-lightbulb" | "enter-more" | "eraser" | "expand-all" | "expand-group" | "expense-report" | "explorer" | "factory" | "fax-machine" | "feed" | "feeder-arrow" | "filter-analytics" | "filter" | "folder-blank" | "folder-full" | "folder" | "form" | "forward" | "future" | "fx" | "gantt-bars" | "general-leave-request" | "generate-shortcut" | "group-2" | "group" | "header" | "heading1" | "heading2" | "hide" | "hint" | "history" | "home-share" | "home" | "horizontal-stacked-chart" | "horizontal-waterfall-chart" | "hr-approval" | "iPad-2" | "iPad" | "iPhone-2" | "iPhone" | "idea-wall" | "image-viewer" | "initiative" | "inspect-down" | "inspect" | "inspection" | "instance" | "it-host" | "journey-arrive" | "journey-change" | "journey-depart" | "key-user-setting" | "key" | "lead-outdated" | "lead" | "leades" | "learning-assistant" | "legend" | "line-chart-time-axis" | "line-charts" | "list" | "loan" | "locate-me" | "map-2" | "map-3" | "map" | "master-task-triangle" | "media-forward" | "media-pause" | "media-play" | "media-reverse" | "media-rewind" | "megaphone" | "message-popup" | "message-success" | "message-warning" | "microphone" | "mileage" | "move" | "mri-scan" | "multi-select" | "multiple-bar-chart" | "multiple-line-chart" | "my-view" | "nav-back" | "navigation-down-arrow" | "navigation-left-arrow" | "navigation-right-arrow" | "notification-2" | "notification" | "number 1" | "number" | "nurse" | "opportunities" | "opportunity" | "order-status" | "org-chart" | "outbox" | "paging" | "paid-leave" | "palette" | "paper-plane" | "passenger-train" | "pdf-reader" | "pending" | "per-diem" | "performance" | "permission" | "physical-activity" | "picture" | "pie-chart" | "pipeline-analysis" | "pixelate" | "ppt-attachment" | "present" | "primary-key" | "print" | "private" | "project-definition-triangle-2" | "projector" | "provision" | "pull-down" | "pushpin-off" | "receipt" | "record" | "redo 1" | "redo" | "repost" | "resize-vertical" | "response" | "responsive 1" | "responsive" | "retail-store" | "sales-notification" | "sales-order-item" | "sales-order" | "sales-quote" | "sap-box" | "screen-split-one" | "screen-split-three" | "screen-split-two" | "search" | "settings" | "shortcut" | "show-edit" | "show" | "simple-payment" | "simulate" | "sonography" | "sort-ascending" | "sort-descending" | "sort" | "sorting-ranking" | "status-critical" | "status-error" | "status-in-process" | "status-inactive" | "status-negative" | "study-leave" | "subway-train" | "suitcase" | "supplier" | "survey" | "sys-add" | "sys-back-2" | "sys-back" | "sys-cancel-2" | "sys-cancel" | "sys-help-2" | "sys-help" | "sys-last-page" | "sys-minus" | "sys-monitor" | "table-column" | "table-row" | "table-view" | "tag-cloud-chart" | "tag" | "temperature" | "text-align-center" | "text-align-justified" | "text-align-left" | "text" | "thumb-down" | "thumb-up" | "time-account" | "time-entry-request" | "time-overdue" | "tools-opportunity" | "touch" | "travel-expense-report" | "travel-expense" | "travel-itinerary" | "two-keys" | "ui-notifications" | "umbrella" | "underline-text" | "undo" | "upload-to-cloud" | "upload" | "upstacked-chart" | "user-edit" | "user-settings" | "vertical-bar-chart-2" | "vertical-bullet-chart" | "vertical-grip" | "vertical-stacked-chart" | "vertical-waterfall-chart" | "warning-2" | "washing-machine" | "weather-proofing" | "web-cam" | "widgets"}
	 */
	export let icon: string;

	$: props = {
		tabindex: 0,
		...$$restProps,
		class: [
			'fn-list__item',
			selected && 'is-selected',
			info && 'fn-list__item--info-bar',
			disabled && 'is-disabled',
			readonly && 'is-readonly',
			$$slots.checkbox && 'fn-list__item--has-checkbox',
			$$restProps.class
		]
			.filter(Boolean)
			.join(' ')
	};
</script>

<li {...props} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
	{#if $$slots.checkbox}
		<div>
			<slot name="checkbox" />
		</div>
	{/if}

	<slot name="avatar" />
	{#if icon}
		<span class={`fn-list__icon sap-icon sap-icon--${icon}`} />
	{/if}
	{#if !title}
		<span class="fn-list__text"><slot /></span>
	{:else}
		<div class="fn-list__start-container">
			<span class="fn-list__title">{title}</span>
			{#if byline}
				<span class="fn-list__byline">{byline}</span>
			{:else}
				<slot />
			{/if}
		</div>
	{/if}

	<div class="fn-list__end-container">
		{#if endText}<span>{endText}</span>{/if}
		<slot name="buttons" />
	</div>
</li>
