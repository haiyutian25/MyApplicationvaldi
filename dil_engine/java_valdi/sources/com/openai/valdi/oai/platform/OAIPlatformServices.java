package com.openai.valdi.oai.platform;

import com.openai.valdi.celsius.CelsiusService;
import com.openai.valdi.filepicker.FilePickerService;
import com.openai.valdi.integrity.DeviceIntegrityService;
import com.openai.valdi.location.LocationService;
import com.openai.valdi.voice.DictationService;
import com.openai.valdi.voice.VoiceService;
import com.snap.valdi.callable.ValdiFunctionNative;
import com.snap.valdi.utils.b;
import defpackage.dhe0;
import defpackage.ege0;
import defpackage.hfe0;
import defpackage.jmz0;
import defpackage.qee0;
import defpackage.qge0;
import defpackage.yee0;
import defpackage.zfe0;
import kotlin.Metadata;

/* JADX INFO: compiled from: r8-map-id-72a12c6898df0e99328f207cf99369ef3312489e373d42257924f5cad5a4d749 */
/* JADX INFO: loaded from: D:\valdi\com.openai.chatgpt\dil_engine\_dex\classes6.dex */
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b&\b\u0007\u0018\u00002\u00020\u0001BÕ\u0001\b\u0017\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0014\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0016\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u001a\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u001c\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u001e\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010 \u0012\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\"¢\u0006\u0004\b$\u0010%R\u0018\u0010&\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b&\u0010'R\u0018\u0010(\u001a\u0004\u0018\u00010\u00048\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b(\u0010)R\u0018\u0010*\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b*\u0010+R\u0018\u0010,\u001a\u0004\u0018\u00010\b8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b,\u0010-R\u0018\u0010.\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b.\u0010/R\u0018\u00100\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b0\u00101R\u0018\u00102\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b2\u00103R\u0018\u00104\u001a\u0004\u0018\u00010\u00108\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b4\u00105R\u0018\u00106\u001a\u0004\u0018\u00010\u00128\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b6\u00107R\u0018\u00108\u001a\u0004\u0018\u00010\u00148\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b8\u00109R\u0018\u0010:\u001a\u0004\u0018\u00010\u00168\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b:\u0010;R\u0018\u0010<\u001a\u0004\u0018\u00010\u00188\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b<\u0010=R\u0018\u0010>\u001a\u0004\u0018\u00010\u001a8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b>\u0010?R\u0018\u0010@\u001a\u0004\u0018\u00010\u001c8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\b@\u0010AR\u0018\u0010B\u001a\u0004\u0018\u00010\u001e8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\bB\u0010CR\u0018\u0010D\u001a\u0004\u0018\u00010 8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\bD\u0010ER\u0018\u0010F\u001a\u0004\u0018\u00010\"8\u0002@\u0002X\u0083\u000e¢\u0006\u0006\n\u0004\bF\u0010G¨\u0006H"}, d2 = {"Lcom/openai/valdi/oai/platform/OAIPlatformServices;", "Lcom/snap/valdi/utils/b;", "Lcom/openai/valdi/celsius/CelsiusService;", "celsiusService", "Lcom/openai/valdi/oai/platform/OAIExperimentService;", "experimentService", "Lcom/openai/valdi/oai/platform/OAIAPIService;", "apiService", "Lcom/openai/valdi/oai/platform/OAILoggingService;", "loggingService", "Lcom/openai/valdi/oai/platform/OAIAccountScope;", "accountScope", "Lcom/openai/valdi/oai/platform/OAIAnalyticsService;", "analyticsService", "Lcom/openai/valdi/oai/platform/OAIAuthenticationService;", "authenticationService", "Lcom/openai/valdi/oai/platform/OAIAccountFeatureService;", "accountFeatureService", "Lcom/openai/valdi/oai/platform/OAIAccountSettingsService;", "accountSettingsService", "Lcom/openai/valdi/oai/platform/OAIAccountCustomizationsService;", "accountCustomizationsService", "Lcom/openai/valdi/oai/platform/OAIPetCatalogDataSource;", "petCatalogDataSource", "Lcom/openai/valdi/voice/VoiceService;", "voiceService", "Lcom/openai/valdi/filepicker/FilePickerService;", "filePickerService", "Lcom/openai/valdi/location/LocationService;", "locationService", "Lcom/openai/valdi/integrity/DeviceIntegrityService;", "deviceIntegrityService", "Lcom/openai/valdi/oai/platform/OAISpeechSynthesisService;", "speechSynthesisService", "Lcom/openai/valdi/voice/DictationService;", "dictationService", "<init>", "(Lcom/openai/valdi/celsius/CelsiusService;Lcom/openai/valdi/oai/platform/OAIExperimentService;Lcom/openai/valdi/oai/platform/OAIAPIService;Lcom/openai/valdi/oai/platform/OAILoggingService;Lcom/openai/valdi/oai/platform/OAIAccountScope;Lcom/openai/valdi/oai/platform/OAIAnalyticsService;Lcom/openai/valdi/oai/platform/OAIAuthenticationService;Lcom/openai/valdi/oai/platform/OAIAccountFeatureService;Lcom/openai/valdi/oai/platform/OAIAccountSettingsService;Lcom/openai/valdi/oai/platform/OAIAccountCustomizationsService;Lcom/openai/valdi/oai/platform/OAIPetCatalogDataSource;Lcom/openai/valdi/voice/VoiceService;Lcom/openai/valdi/filepicker/FilePickerService;Lcom/openai/valdi/location/LocationService;Lcom/openai/valdi/integrity/DeviceIntegrityService;Lcom/openai/valdi/oai/platform/OAISpeechSynthesisService;Lcom/openai/valdi/voice/DictationService;)V", "_celsiusService", "Lcom/openai/valdi/celsius/CelsiusService;", "_experimentService", "Lcom/openai/valdi/oai/platform/OAIExperimentService;", "_apiService", "Lcom/openai/valdi/oai/platform/OAIAPIService;", "_loggingService", "Lcom/openai/valdi/oai/platform/OAILoggingService;", "_accountScope", "Lcom/openai/valdi/oai/platform/OAIAccountScope;", "_analyticsService", "Lcom/openai/valdi/oai/platform/OAIAnalyticsService;", "_authenticationService", "Lcom/openai/valdi/oai/platform/OAIAuthenticationService;", "_accountFeatureService", "Lcom/openai/valdi/oai/platform/OAIAccountFeatureService;", "_accountSettingsService", "Lcom/openai/valdi/oai/platform/OAIAccountSettingsService;", "_accountCustomizationsService", "Lcom/openai/valdi/oai/platform/OAIAccountCustomizationsService;", "_petCatalogDataSource", "Lcom/openai/valdi/oai/platform/OAIPetCatalogDataSource;", "_voiceService", "Lcom/openai/valdi/voice/VoiceService;", "_filePickerService", "Lcom/openai/valdi/filepicker/FilePickerService;", "_locationService", "Lcom/openai/valdi/location/LocationService;", "_deviceIntegrityService", "Lcom/openai/valdi/integrity/DeviceIntegrityService;", "_speechSynthesisService", "Lcom/openai/valdi/oai/platform/OAISpeechSynthesisService;", "_dictationService", "Lcom/openai/valdi/voice/DictationService;", "modules_oai_platform_services-oai_platform_services_api_kt_kt"}, k = 1, mv = {1, 8, ValdiFunctionNative.FLAGS_NONE}, xi = 48)
@jmz0(propertyReplacements = "", schema = "'celsiusService':r?:'[0]','experimentService':r?:'[1]','apiService':r?:'[2]','loggingService':r?:'[3]','accountScope':r?:'[4]','analyticsService':r?:'[5]','authenticationService':r?:'[6]','accountFeatureService':r?:'[7]','accountSettingsService':r?:'[8]','accountCustomizationsService':r?:'[9]','petCatalogDataSource':r?:'[10]','voiceService':r?:'[11]','filePickerService':r?:'[12]','locationService':r?:'[13]','deviceIntegrityService':r?:'[14]','speechSynthesisService':r?:'[15]','dictationService':r?:'[16]'", typeReferences = {CelsiusService.class, OAIExperimentService.class, OAIAPIService.class, OAILoggingService.class, OAIAccountScope.class, OAIAnalyticsService.class, OAIAuthenticationService.class, OAIAccountFeatureService.class, OAIAccountSettingsService.class, OAIAccountCustomizationsService.class, OAIPetCatalogDataSource.class, VoiceService.class, FilePickerService.class, LocationService.class, DeviceIntegrityService.class, OAISpeechSynthesisService.class, DictationService.class})
public final class OAIPlatformServices extends b {
    private OAIAccountCustomizationsService _accountCustomizationsService;
    private OAIAccountFeatureService _accountFeatureService;
    private OAIAccountScope _accountScope;
    private OAIAccountSettingsService _accountSettingsService;
    private OAIAnalyticsService _analyticsService;
    private OAIAPIService _apiService;
    private OAIAuthenticationService _authenticationService;
    private CelsiusService _celsiusService;
    private DeviceIntegrityService _deviceIntegrityService;
    private DictationService _dictationService;
    private OAIExperimentService _experimentService;
    private FilePickerService _filePickerService;
    private LocationService _locationService;
    private OAILoggingService _loggingService;
    private OAIPetCatalogDataSource _petCatalogDataSource;
    private OAISpeechSynthesisService _speechSynthesisService;
    private VoiceService _voiceService;

    public OAIPlatformServices(CelsiusService celsiusService, OAIExperimentService oAIExperimentService, OAIAPIService oAIAPIService, OAILoggingService oAILoggingService, OAIAccountScope oAIAccountScope, OAIAnalyticsService oAIAnalyticsService, OAIAuthenticationService oAIAuthenticationService, OAIAccountFeatureService oAIAccountFeatureService, OAIAccountSettingsService oAIAccountSettingsService, OAIAccountCustomizationsService oAIAccountCustomizationsService, OAIPetCatalogDataSource oAIPetCatalogDataSource, VoiceService voiceService, FilePickerService filePickerService, LocationService locationService, DeviceIntegrityService deviceIntegrityService, OAISpeechSynthesisService oAISpeechSynthesisService, DictationService dictationService) {
        this._celsiusService = celsiusService;
        this._experimentService = oAIExperimentService;
        this._apiService = oAIAPIService;
        this._loggingService = oAILoggingService;
        this._accountScope = oAIAccountScope;
        this._analyticsService = oAIAnalyticsService;
        this._authenticationService = oAIAuthenticationService;
        this._accountFeatureService = oAIAccountFeatureService;
        this._accountSettingsService = oAIAccountSettingsService;
        this._accountCustomizationsService = oAIAccountCustomizationsService;
        this._petCatalogDataSource = oAIPetCatalogDataSource;
        this._voiceService = voiceService;
        this._filePickerService = filePickerService;
        this._locationService = locationService;
        this._deviceIntegrityService = deviceIntegrityService;
        this._speechSynthesisService = oAISpeechSynthesisService;
        this._dictationService = dictationService;
    }

    /* JADX INFO: renamed from: a, reason: from getter */
    public final OAIAnalyticsService get_analyticsService() {
        return this._analyticsService;
    }

    /* JADX INFO: renamed from: b, reason: from getter */
    public final OAIAPIService get_apiService() {
        return this._apiService;
    }

    public final void c(qee0 qee0Var) {
        this._accountCustomizationsService = qee0Var;
    }

    public final void d(yee0 yee0Var) {
        this._accountFeatureService = yee0Var;
    }

    public final void e(OAIAccountScope oAIAccountScope) {
        this._accountScope = oAIAccountScope;
    }

    public final void f(hfe0 hfe0Var) {
        this._accountSettingsService = hfe0Var;
    }

    public final void g(OAIAnalyticsService oAIAnalyticsService) {
        this._analyticsService = oAIAnalyticsService;
    }

    public final void h(OAIAPIService oAIAPIService) {
        this._apiService = oAIAPIService;
    }

    public final void i(zfe0 zfe0Var) {
        this._celsiusService = zfe0Var;
    }

    public final void j(ege0 ege0Var) {
        this._dictationService = ege0Var;
    }

    public final void k(OAIExperimentService oAIExperimentService) {
        this._experimentService = oAIExperimentService;
    }

    public final void l() {
        this._loggingService = qge0.a;
    }

    public final void m(dhe0 dhe0Var) {
        this._speechSynthesisService = dhe0Var;
    }

    public OAIPlatformServices() {
        this._celsiusService = null;
        this._experimentService = null;
        this._apiService = null;
        this._loggingService = null;
        this._accountScope = null;
        this._analyticsService = null;
        this._authenticationService = null;
        this._accountFeatureService = null;
        this._accountSettingsService = null;
        this._accountCustomizationsService = null;
        this._petCatalogDataSource = null;
        this._voiceService = null;
        this._filePickerService = null;
        this._locationService = null;
        this._deviceIntegrityService = null;
        this._speechSynthesisService = null;
        this._dictationService = null;
    }
}
