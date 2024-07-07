class ToFormData {
    toFormData(encoded, checkArray = false) {
        const keys = Object.keys(this);
        const formData = new FormData();
        let value;
        let trueKey;
        if (keys.length > 0) {
            keys.forEach((namespace) => {
                trueKey =
                    namespace.startsWith("_") > -1
                        ? namespace.substr(1)
                        : namespace;
                value = this[namespace];
                if (checkArray && Array.isArray(value)) {
                    value.forEach((val) => {
                        console.log({ trueKey });
                        formData.append(trueKey, val);
                    });
                } else {
                    formData.set(trueKey, value);
                }
            });
        }

        if (encoded) {
            var s = "";
            function encode(s) {
                return encodeURIComponent(s).replace(/%20/g, "+");
            }
            for (var pair of formData.entries()) {
                if (typeof pair[1] == "string") {
                    s +=
                        (s ? "&" : "") +
                        encode(pair[0]) +
                        "=" +
                        encode(pair[1]);
                }
            }
            return s;
        }

        return formData;
    }

    toJSON() {
        let formData = {};

        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                formData[key.startsWith("_") ? key.substr(1) : key] = this[key];
            }
        }

        return formData;
    }
}

export default ToFormData