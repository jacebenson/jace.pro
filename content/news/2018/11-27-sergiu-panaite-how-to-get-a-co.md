---
title: "How to get a count of records for each table in ServiceNow instances"
date: 2018-11-26T14:02:50.000Z
link: "https://community.servicenow.com/community?id=community_blog&sys_id=13cac8cddb0aa7c07d3e02d5ca9619c2"
---
<p>Have you ever needed to get full count of all tables in one go in ServiceNow?</p>
<p>As <strong>admin </strong>user go to <strong>System Definition -&gt; Scripts-Background </strong>and run:</p>
<pre class="language-javascript"><code>var gr &#61; new GlideRecord(&#39;sys_dictionary&#39;);
gr.addEncodedQuery(&#39;internal_type.label&#61;Collection&#39;);
gr.query();

while (gr.next()){
  try { 
    var gr1 &#61; new GlideAggregate(gr.name.toString());
    gr1.addAggregate(&#39;COUNT&#39;);
    gr1.query();

    if (gr1.next()){
      gs.print(&#39;Table: &#39; &#43; gr.name.toString() &#43; &#39; has: &#39; &#43; gr1.getAggregate(&#39;COUNT&#39;) &#43; &#39; records&#39;);
    }
  } catch (err) {
      gs.print(&#34;We&#39;ve got an error for table: &#34; &#43; gr.name.toString());
      continue;
  }
}</code></pre>
<p>The output should be similar to below one:</p>
<pre class="language-javascript"><code>*** Script: Table: ts_c_10_5 has: 0 records
*** Script: Table: cmdb_ci_exchange_frontend has: 0 records
*** Script: Table: cmdb_ci_netapp_datacenter has: 0 records
*** Script: Table: ts_c_11_4 has: 6199851 records
*** Script: Table: service_reg_query has: 1 records
*** Script: Table: fx_currency_test has: 0 records
*** Script: Table: ua_blocking has: 6 records
*** Script: Table: ts_c_1_8 has: 138 records
*** Script: Table: sys_api_stats_requestor has: 1 records
*** Script: Table: contract_rel_ci has: 0 records
*** Script: Table: cmdb_ci_fuel_tank has: 0 records
*** Script: Table: map_cell has: 0 records
*** Script: Table: sc_recurring_rollup has: 0 records
*** Script: Table: cmdb_group has: 0 records
*** Script: Table: cmdb_ci_appl_ora_ebs has: 0 records
*** Script: Table: alm_license has: 79 records
*** Script: Table: ecc_agent_capability_m2m has: 0 records
*** Script: Table: pc_software_cat_item has: 6 records
*** Script: Table: sys_process_flow has: 171 records
*** Script: Table: syslog_app_scope0001 has: 0 records
*** Script: Table: kb_knowledge_base has: 8 records
*** Script: Table: asmt_metric_definition has: 50 records
*** Script: Table: sqanda_vote has: 2 records
*** Script: Table: csm_household has: 0 records
*** Script: Table: sys_rw_action has: 0 records
*** Script: Table: cmdb_ci_facility_hardware has: 0 records
*** Script: Table: ecc_event0006 has: 0 records
*** Script: Table: sa_pattern_prepost_script has: 28 records
*** Script: Table: cmdb_metric_garbage_collection0001 has: 0 records
*** Script: Table: gsw_status_of_content has: 408 records
*** Script: Table: dscy_switchport has: 0 records
*** Script: Table: chat_queue has: 6 records
*** Script: Table: comm_contact_definition has: 0 records
*** Script: Table: release_phase has: 0 records
*** Script: Table: sys_encryption_pattern has: 7 records
*** Script: Table: ts_c_14_1 has: 0 records
*** Script: Table: cmdb_ci has: 2761 records
*** Script: Table: discovery_classy_scan_app has: 3 records
*** Script: Table: itil_appointment has: 0 records
*** Script: Table: cmdb_rel_attributes has: 0 records
*** Script: Table: sn_cmp_pol_condition_type has: 3 records
*** Script: Table: cmdb_ci_endpoint_cloud_db_instance has: 0 records
*** Script: Table: relation_health_result has: 0 records
*** Script: Table: sn_actsub_activity_type has: 4 records
*** Script: Table: sys_upgrade_state has: 112744 records
*** Script: Table: ts_c_13_7 has: 0 records
*** Script: Table: sys_ui_formatter has: 144 records
*** Script: Table: sys_cs_session_binding has: 0 records
*** Script: Table: sys_progress_worker has: 48 records
*** Script: Table: cmdb_ci_storage_port has: 0 records
*** Script: Table: sys_push_notification0005 has: 0 records
*** Script: Table: pa_scripts has: 19 records
*** Script: Table: ts_c_17_0 has: 579 records
*** Script: Table: cmdb_ci_san_connection has: 0 records
*** Script: Table: template_import_log has: 0 records
*** Script: Table: cmdb_metric_event_logs0004 has: 0 records
*** Script: Table: grc_control_test_sample_data has: 3036 records
*** Script: Table: cmdb_ci_container_object has: 0 records
*** Script: Table: cmdb_ci_lb_haproxy has: 0 records
*** Script: Table: kb_knowledge_summary has: 49 records
*** Script: Table: kb_article_checklist_answer has: 0 records
*** Script: Table: discovery_probes_multi has: 27 records
*** Script: Table: cert_related_list_cond has: 0 records
*** Script: Table: sam_sw_counter_result has: 71 records
*** Script: Table: sys_api_stats has: 169 records
*** Script: Table: cmdb_metric_java_permgen0000 has: 0 records
*** Script: Table: ts_c_4_5 has: 125 records
*** Script: Table: ts_c_19_9 has: 76708 records
*** Script: Table: sn_grc_m2m_profile_staging has: 0 records
*** Script: Table: sn_grc_indicator_task has: 0 records
*** Script: Table: cmdb_ci_computer_room has: 2 records
*** Script: Table: sn_bm_common_indicator_activity has: 0 records
*** Script: Table: grc_activity has: 1 records
*** Script: We&#39;ve got an error for table: ts_c_9_5
*** Script: Table: sys_push_notification0002 has: 0 records
*** Script: Table: syslog_cancellation0004 has: 1 records
*** Script: Table: cmdb_ci_appl_cisco_ucs_blade has: 0 records
*** Script: Table: sys_encryption_pattern_character has: 10 records
*** Script: Table: automation_pipeline_parser_key_value has: 0 records
*** Script: Table: cmdb_metric_event_logs has: 0 records
*** Script: Table: syslog0002 has: 32587 records
*** Script: Table: sys_export_set_log0006 has: 0 records
*** Script: Table: ecc_queue0000 has: 288 records
*** Script: Table: ts_c_24_1 has: 0 records
*** Script: Table: map_view_ci_type has: 1 records
*** Script: Table: item_option_new has: 291 records
*** Script: Table: sc_category_company_no_mtom has: 0 records
*** Script: Table: m2m_risk_control has: 10 records
*** Script: Table: sa_service_group_member has: 0 records
*** Script: Table: cmdb_ci_app_server_dp_domain has: 0 records
*** Script: Table: sys_rollback_log0000 has: 0 records
*** Script: Table: cmdb_ci_epic_cache has: 0 records
*** Script: Table: command_has_transformer has: 1 records
*** Script: Table: statemgmt_not_allow_ops has: 0 records
*** Script: Table: ts_c_15_4 has: 249314 records
*** Script: Table: sys_export_set_log0007 has: 0 records
*** Script: Table: sla_repair_log_entry0003 has: 0 records
*** Script: Table: sc_layout_ui_macro_nd_mtom has: 36 records
*** Script: Table: sys_atf_test_result_item has: 0 records
*** Script: Table: cmdb_ci_appl_biztalk_orch has: 0 records
*** Script: Table: vtb_card has: 0 records
*** Script: Table: sys_cb_design_topic has: 0 records
*** Script: Table: cmdb_qb_result_base has: 0 records
*** Script: Table: cmdb_ci_db_syb_catalog has: 0 records
*** Script: Table: cmdb_ci_internet_gateway has: 0 records
*** Script: Table: snmp_credentials has: 0 records
*** Script: Table: sys_ui_view has: 543 records
............</code></pre>