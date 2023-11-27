#!/bin/bash
sed -i 's#__VITE_BASE_URL__#'"$VITE_BASE_URL"'#g' /usr/share/nginx/html/env.jsx
exec "$@"
