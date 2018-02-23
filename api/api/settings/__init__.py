import os

modules = {
    "dev": "api.settings.dev_settings",
    "hmg": "api.settings.hmg_settings",
    "prd": "api.settings.prd_settings",
}

module = modules.get(os.environ.get("ENV_TYPE"), "api.settings")